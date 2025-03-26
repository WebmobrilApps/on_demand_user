import React, { useContext, useState } from 'react';
import {
  Image,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
  Fonts,
  regex,
  SCREEN_WIDTH,
  SF,
  SH,
  socialButtons,
  SW,
  validationMSG,
} from '../../utils';
import {
  AuthBottomContainer,
  AuthImgComp,
  Container,
  CustomToast,
  InputIcons,
  Spacing,
  VectoreIcons,
} from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../component/Input';
import imagePaths from '../../assets/images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
// import { CheckBox } from '@rneui/base';
import { useTranslation } from 'react-i18next';
import { ChatContext } from '../ChatProvider';
import { useDispatch } from 'react-redux';
import { StorageProvider, useLoginMutation, useRegisterMutation } from '../../services';
import DeviceInfo from 'react-native-device-info';

const SocialButton = ({
  icon,
  onPress,
  width = SW(40),
  iconSize = SH(26),
  height = SW(40),
}: {
  icon: any;
  onPress: () => void;
  width?: number;
  height?: number;
  iconSize?: number;
}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={[styles.socialButton, { width, height }]}
    onPress={onPress}>
    <Image
      source={icon}
      style={{ width: iconSize, height: iconSize, resizeMode: 'contain' }}
    />
  </TouchableOpacity>
);

type SignupProps = {};

const SignupScreen: React.FC<SignupProps> = ({ }) => {
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [cpasswordVisibility, setcpasswordVisibility] = useState(true);
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  const [register, { isLoading, error }] = useRegisterMutation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .required(t('validation.emptyFullName'))
      .min(3, t('validation.fullNameMinLength'))
      .matches(regex.NAME_REGEX, t('validation.validFullName')),
    email: Yup.string()
      .matches(regex.EMAIL_REGEX_WITH_EMPTY, t('validation.validEmail'))
      .required(t('validation.emptyEmail')),
    mobileno: Yup.string()
      .matches(regex.MOBIILE, t('validation.validMobile'))
      .required(t('validation.emptyMobile')),
    password: Yup.string()
      .required(t('validation.emptyPassword'))
      .matches(regex.PASSWORD, t('validation.passValid')),
    cpassword: Yup.string()
      .required(t('validation.emptyConfirmPassword'))
      .oneOf([Yup.ref('password')], t('validation.notMatchConfirmPassword')),
  });



  const btnSignup = async (
    values: { email: string; password: string; cpassword: string; fname: string; mobileno: string; },
    resetForm: any,
  ) => {
    if (!checked) {
      CustomToast({ message: 'Your OTP', description: 'Please accept term of service', position: 'top', type: 'warning' });

      return false
    };
    const fcmToken = await StorageProvider.getItem('fcmToken')
    const device_id = await DeviceInfo.getUniqueId();
    const device_type = Platform.OS == 'android' ? '1' : '2';

    let userData = {
      "full_name": values.fname,
      "email": values.email,
      "password": values.password,
      "mobile": values.mobileno,
      "fcmToken": fcmToken,
      "device_id": device_id,
      "device_type": device_type
    }

    try {
      const response = await register(userData).unwrap();
      console.log('responseresponse', response);
      if (response.succeeded) {
        CustomToast({ message: 'Your OTP', description: response.ResponseBody.otp, position: 'top', type: 'success' });
        navigation.navigate(RouteName.OTP_VERIFY, {
          fromScreen: 'signup',
          userToken: response.ResponseBody.token,
          email: values.email,
        });
      } else {
        let mess = response?.ResponseMessage || response.error?.ResponseMessage || 'Something went wrong. Please try again.';
        CustomToast({ message: 'Error', description: mess, position: 'top', type: 'danger', });
      }
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  return (
    <Container
      isBackButton={true}
      onBackPress={() => {
        navigation.goBack();
      }}
      isAuth={true}
      style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 0 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <Spacing space={SH(40)} />

        <AuthImgComp icon={imagePaths.signup_img} />

        <AuthBottomContainer>
          <View style={{ paddingVertical: SH(35), paddingHorizontal: SW(20) }}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                cpassword: '',
                fname: '',
                mobileno: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                btnSignup(values, resetForm);
              }}>
              {({
                handleChange,
                setFieldTouched,
                setFieldValue,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <Inputs
                    placeholder={t('placeholders.fullname')}
                    inputStyle={{ color: Colors.textWhite }}
                    onChangeText={handleChange('fname')}
                    // onBlur={() => setFieldTouched('fname')}
                    onBlur={() => setFieldValue('fname', values.fname.trim())}
                    value={values.fname}
                    errorMessage={
                      touched.fname && errors.fname && errors.fname
                        ? errors.fname
                        : ''
                    }
                    inputType="default"
                    leftIcon={<InputIcons icon={imagePaths.email_icon} />}
                    placeholderTextColor={Colors.placeHolderColor}
                  />

                  <Spacing space={SH(20)} />

                  <Inputs
                    placeholder={t('placeholders.mobileno')}
                    inputStyle={{ color: Colors.textWhite }}
                    onChangeText={handleChange('mobileno')}
                    // onBlur={() => setFieldTouched('mobileno')}
                    onBlur={() => setFieldValue('mobileno', values.mobileno.trim())}
                    value={values.mobileno}
                    errorMessage={
                      touched.mobileno && errors.mobileno && errors.mobileno
                        ? errors.mobileno
                        : ''
                    }
                    inputType="number-pad"
                    leftIcon={<InputIcons icon={imagePaths.mobile_icon} />}
                    placeholderTextColor={Colors.placeHolderColor}
                  />
                  <Spacing space={SH(20)} />

                  <Inputs
                    placeholder={t('placeholders.email')}
                    inputStyle={{ color: Colors.textWhite }}
                    onChangeText={handleChange('email')}
                    // onBlur={() => setFieldTouched('email')}
                    onBlur={() => setFieldValue('email', values.email.trim())}
                    inputType="email-address"
                    value={values.email}
                    errorMessage={
                      touched.email && errors.email && errors.email
                        ? errors.email
                        : ''
                    }
                    leftIcon={<InputIcons icon={imagePaths.email_icon} />}
                    placeholderTextColor={Colors.placeHolderColor}
                  />

                  <Spacing space={SH(20)} />

                  <Inputs
                    placeholder={t('placeholders.password')}
                    inputStyle={{ color: Colors.textWhite }}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    errorMessage={
                      touched.password && errors.password && errors.password
                        ? errors.password
                        : ''
                    }
                    value={values.password}
                    leftIcon={<InputIcons icon={imagePaths.lock_icon} />}
                    secureTextEntry={passwordVisibility}

                    rightIcon={
                      <TouchableOpacity
                        onPress={() => {
                          setpasswordVisibility(!passwordVisibility);
                        }}>
                        <InputIcons
                          icon={
                            !passwordVisibility
                              ? imagePaths.eye_open
                              : imagePaths.eye_off_icon
                          }
                        />
                      </TouchableOpacity>
                    }
                    placeholderTextColor={Colors.placeHolderColor}
                  />

                  <Spacing space={SH(20)} />

                  <Inputs
                    placeholder={t('placeholders.reEnterPassword')}
                    inputStyle={{ color: Colors.textWhite }}
                    onChangeText={handleChange('cpassword')}
                    onBlur={() => setFieldTouched('cpassword')}
                    errorMessage={
                      touched.cpassword && errors.cpassword && errors.cpassword
                        ? errors.cpassword
                        : ''
                    }
                    value={values.cpassword}
                    leftIcon={<InputIcons icon={imagePaths.lock_icon} />}
                    secureTextEntry={cpasswordVisibility}
                    rightIcon={
                      <TouchableOpacity
                        onPress={() => {
                          setcpasswordVisibility(!cpasswordVisibility);
                        }}>
                        <InputIcons
                          icon={
                            !cpasswordVisibility
                              ? imagePaths.eye_open
                              : imagePaths.eye_off_icon
                          }
                        />
                      </TouchableOpacity>
                    }
                    placeholderTextColor={Colors.placeHolderColor}
                  />
                  <Spacing space={SH(20)} />
                  {/* check box==============================    */}
                  <View style={styles.checkBoxContainer}>
                    <Pressable onPress={() => { toggleCheckbox() }} style={{ marginRight: 10 }}>
                      {
                        !checked ?
                          <VectoreIcons
                            icon="Feather"
                            color={Colors.white}
                            name="square"
                            size={SW(28)}
                          />
                          :
                          <VectoreIcons
                            icon="Feather"
                            color={Colors.white}
                            name="check-square"
                            size={SW(28)}
                          />
                      }
                    </Pressable>
                    <Text style={styles.consfirmTxt}>
                      By signing up you accept the{' '}
                      <Text
                        onPress={() => {
                          navigation.navigate(RouteName.PRIVACY_POLICY, {
                            title: 'Terms of Service',
                          });
                        }}
                        style={{ textDecorationLine: 'underline' }}>
                        Terms of Service
                      </Text>{' '}
                      & {'\n'}
                      <Text
                        onPress={() => {
                          navigation.navigate(RouteName.PRIVACY_POLICY, {
                            title: 'Privacy Policy',
                          });
                        }}
                        style={{ textDecorationLine: 'underline' }}>
                        Privacy Policy
                      </Text>
                    </Text>
                  </View>

                  <Spacing space={SH(30)} />

                  <Buttons
                    buttonStyle={{ backgroundColor: Colors.bgwhite }}
                    textColor={Colors.themeColor}
                    title={t('signup.signUpButton')}
                    onPress={() => {
                      handleSubmit();
                      Keyboard.dismiss();
                    }}
                  // isLoading={true}
                  />

                  <Spacing space={SH(30)} />

                  <View style={styles.lineViewContainer}>
                    <View style={styles.leftRightLine} />
                    <Text style={styles.ortext}>{t('signup.orText')}</Text>
                    <View style={styles.leftRightLine} />
                  </View>

                  <Spacing space={SH(20)} />

                  <View style={styles.socialIconContainer}>
                    {socialButtons.map((button, index) => (
                      <SocialButton
                        key={index}
                        icon={button.icon}
                        width={(SCREEN_WIDTH * 0.4) / 4}
                        iconSize={SH(26)}
                        onPress={button.onPress}
                      />
                    ))}
                  </View>

                  <Spacing space={SH(25)} />

                  <Text style={styles.dontHaveAccTxt}>
                    {t('signup.alreadyHaveAccount')}{' '}
                    <Text
                      onPress={() => {
                        navigation.navigate(RouteName.LOGIN);
                      }}
                      style={{ fontFamily: Fonts.BOLD, fontSize: SF(16) }}>
                      {t('signup.logIn')}{' '}
                    </Text>
                  </Text>
                </>
              )}
            </Formik>
          </View>
        </AuthBottomContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgwhite,
  },
  errorText: {
    color: 'red',
    fontSize: SF(12),
  },
  submitButton: {
    color: Colors.textWhite,
    fontSize: SF(16),
    fontWeight: 'bold',
    paddingVertical: SH(10),
    paddingHorizontal: SW(20),
    backgroundColor: Colors.themeColor,
    borderRadius: SH(5),
    textAlign: 'center',
  },
  forgotPassTxt: {
    color: Colors.textWhite,
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  lineViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  leftRightLine: {
    height: 1,
    backgroundColor: Colors.white,
    width: SCREEN_WIDTH * 0.39,
  },
  ortext: {
    color: Colors.textWhite,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(14),
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  socialButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SW(10),
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  socialIconContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.35,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  dontHaveAccTxt: {
    color: Colors.textWhite,
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    textAlign: 'center',
  },
  consfirmTxt: {
    color: Colors.textWhite,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    lineHeight: SH(18),
    // textAlign: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

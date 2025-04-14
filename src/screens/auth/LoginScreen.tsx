import React, {  useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
  Fonts,
  regex,
  SF,
  SH,
  socialButtons,
  SW,
  useDisableGestures,
  useProfileUpdate,
} from '../../utils';
import {
  AuthBottomContainer,
  AuthImgComp,
  Container,
  CustomToast,
  InputField,
  Spacing,
} from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import imagePaths from '../../assets/images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import { useTranslation } from 'react-i18next';
import { StorageProvider, useLoginMutation } from '../../services';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux';
import DeviceInfo from 'react-native-device-info';
const SCREEN_WIDTH =  Dimensions.get('window').width
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

type LoginProps = {};

const LoginScreen: React.FC<LoginProps> = ({ }) => {
  const navigation = useNavigation<any>();
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useDisableGestures();

  const [login, { isLoading }] = useLoginMutation();

  useProfileUpdate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(regex.EMAIL_REGEX_WITH_EMPTY, t('validation.validEmail'))
      .required(t('validation.emptyEmail')),
    password: Yup.string()
      .required(t('validation.emptyPassword')),
  });

  const btnSignIn = async (values: { email: string; password: string }, resetForm: any) => {

    const fcmToken = await StorageProvider.getItem('fcmToken');
    const device_id = await DeviceInfo.getUniqueId();
    const device_type = Platform.OS === 'android' ? '1' : '2';

    let userData = {
      email: values.email,
      password: values.password,
      fcmToken: fcmToken || 'fcm-token',
      device_id: device_id,
      device_type: device_type,
    };
    try {
      const response = await login(userData).unwrap();
      console.log('responseresponse', response);
      if (response.succeeded) {
        if (response.ResponseBody.is_verified === false) {
          CustomToast({ message: 'Your OTP', description: response.ResponseBody.otp, position: 'top', type: 'success' });
          navigation.navigate(RouteName.OTP_VERIFY, {
            fromScreen: 'signup',
            userToken: response.ResponseBody.token,
            email: values.email,
          });
        } else {
          // CustomToast({ message: 'Success', description: response.ResponseMessage, position: 'top', type: 'success' });
          dispatch(setToken({ token: response.ResponseBody.token }));
          StorageProvider.saveItem('token', response.ResponseBody.token);
          setTimeout(() => {
            navigation.navigate(RouteName.HOME);
          }, 200);

        }
        resetForm();
      } else {
        let mess = response?.ResponseMessage || response.error?.ResponseMessage || 'Something went wrong. Please try again.';
        CustomToast({ message: 'Error', description: mess, position: 'top', type: 'danger' });
      }
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };


  return (
    <Container isAuth={true} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 0 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <Spacing space={SH(40)} />

        <AuthImgComp icon={imagePaths.login_img} />

        <AuthBottomContainer>
          <View style={{ paddingVertical: SH(35), paddingHorizontal: SW(20) }}>
            <Formik
              initialValues={{
                email: 'veer@mailinator.com',
                password: 'Qwerty@1',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                btnSignIn(values, resetForm);
              }}>
              {({
                handleChange,
                setFieldTouched,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue
              }) => (
                <>
                  <InputField
                    placeholder={t('placeholders.email')}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldValue('email', values.email.trim())}
                    leftIcon={imagePaths.email_icon}
                    errorMessage={touched.email && errors.email && errors.email ? errors.email : ''}
                    keyboardType={'email-address'}
                  />

                  <InputField
                    placeholder={t('placeholders.password')}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    leftIcon={imagePaths.lock_icon}
                    errorMessage={touched.password && errors.password && errors.password ? errors.password : ''}
                    rightIcon={!passwordVisibility ? imagePaths.eye_open : imagePaths.eye_off_icon}
                    onRightIconPress={() => setpasswordVisibility(!passwordVisibility)}
                    secureTextEntry={passwordVisibility}
                    keyboardType={'visible-password'}
                  />

                  <Spacing space={SH(20)} />

                  <Text
                    onPress={() => {
                      navigation.navigate(RouteName.FORGOT_PASS);
                    }}
                    style={styles.forgotPassTxt}>
                    {t('login.forgotPassword')}
                  </Text>

                  <Spacing space={SH(30)} />

                  <Buttons
                    buttonStyle={{ backgroundColor: Colors.bgwhite }}
                    textColor={Colors.themeColor}
                    title={t('login.loginButton')}
                    onPress={() => {
                      handleSubmit();
                      Keyboard.dismiss();
                    }}
                    isLoading={isLoading}
                  />

                  <Spacing space={SH(30)} />

                  <View style={styles.lineViewContainer}>
                    <View style={styles.leftRightLine} />
                    <Text style={styles.ortext}>{t('login.orText')}</Text>
                    <View style={styles.leftRightLine} />
                  </View>

                  <Spacing space={SH(20)} />

                  <View style={styles.socialIconContainer}>
                    {socialButtons.map((button, index) => (
                      <SocialButton
                        key={index}
                        icon={button.icon}
                        width={SF(40)}
                        iconSize={SF(26)}
                        onPress={button.onPress}
                      />
                    ))}
                  </View>

                  <Spacing space={SH(25)} />

                  <Text style={styles.dontHaveAccTxt}>
                    {t('login.dontHaveAccount')}
                    <Text
                      onPress={() => {
                        navigation.navigate(RouteName.SIGNUP);
                      }}
                      style={{ fontFamily: Fonts.BOLD, fontSize: SF(16) }}>
                      {t('login.signUp')}
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

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
    // width: SCREEN_WIDTH * 0.35,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  dontHaveAccTxt: {
    color: Colors.textWhite,
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    textAlign: 'center',
  },
});

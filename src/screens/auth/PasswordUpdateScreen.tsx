import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts, regex, SF, SH, SW, validationMSG} from '../../utils';
import {
  AuthBottomContainer,
  AuthImgComp,
  Container,
  InputIcons,
  Spacing,
} from '../../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../component/Input';
import imagePaths from '../../assets/images';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import RouteName from '../../navigation/RouteName';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

type PasswordUpdateProps = {};

const PasswordUpdateScreen: React.FC<PasswordUpdateProps> = ({}) => {
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [cpasswordVisibility, setcpasswordVisibility] = useState(true);
  const {t} = useTranslation();
  const navigation = useNavigation<any>();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, t('validation.passMinLength'))
      .required(t('validation.emptyPassword')),
    cpassword: Yup.string()
      .required(t('validation.emptyConfirmPassword'))
      .oneOf([Yup.ref('password')], t('validation.notMatchConfirmPassword')),
  });

  const btnUpdatePassword = (
    values: {password: string; cpassword: string},
    resetForm: any,
  ) => {
    navigation.navigate(RouteName.LOGIN);
  };

  return (
    <Container
      isAuth={true}
      isBackButton={true}
      onBackPress={() => {
        navigation.goBack();
      }}
      style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 0}}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <Spacing space={SH(40)} />
        <AuthImgComp icon={imagePaths.pass_update_img} />
        <AuthBottomContainer>
          <Formik
            initialValues={{password: '', cpassword: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
              btnUpdatePassword(values, resetForm);
            }}>
            {({
              handleChange,
              setFieldTouched,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.bottomInnerContainer}>
                <View>
                  <Text style={styles.heading}>{t('updatepass.title')}</Text>
                  <Text style={styles.subtitile}>
                    {t('updatepass.subtitle')}
                  </Text>
                  <Inputs
                    placeholder={t('placeholders.createPassword')}
                    inputStyle={{color: Colors.textWhite}}
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
                    placeholder={t('placeholders.confirmPassword')}
                    inputStyle={{color: Colors.textWhite}}
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
                </View>

                <Buttons
                  buttonStyle={styles.buttonContainer}
                  textColor={Colors.themeColor}
                  title={t('updatepass.update')}
                  onPress={() => {
                    handleSubmit();
                    Keyboard.dismiss();
                  }}
                  // isLoading={true}
                />
              </View>
            )}
          </Formik>
        </AuthBottomContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default PasswordUpdateScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgwhite,
  },
  subtitile: {
    color: Colors.textWhite,
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    textAlign: 'center',
    margin: SH(20),
    marginBottom: SH(30),
    lineHeight: SH(22),
  },
  heading: {
    color: Colors.textWhite,
    fontFamily: Fonts.BOLD,
    fontSize: SF(20),
    textAlign: 'center',
  },
  buttonContainer: {backgroundColor: Colors.bgwhite, marginTop: SH(160)},
  bottomInnerContainer: {
    paddingVertical: SH(35),
    paddingHorizontal: SW(20),
    height: '100%',
  },
});

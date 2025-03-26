import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, Fonts, regex, SF, SH, SW, validationMSG } from '../../utils';
import {
  AuthBottomContainer,
  AuthImgComp,
  Container,
  CustomToast,
  InputIcons,
  Spacing,
} from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../component/Input';
import imagePaths from '../../assets/images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import RouteName from '../../navigation/RouteName';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useResendOtpMutation, useSendOtpMutation } from '../../services';

type ForgotProps = {};

const ForgotScreen: React.FC<ForgotProps> = ({ }) => {
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(regex.EMAIL_REGEX_WITH_EMPTY, t('validation.validEmail'))
      .required(t('validation.emptyEmail')),
  });

  const [sendOtp, { isLoading: otpLoader }] = useSendOtpMutation();
  const btnForgot = async(values: { email: string }, resetForm: any) => {
      let userData = {
        email: values.email,
      };

      try {
        const response = await sendOtp(userData).unwrap();
        console.log('sendOtp res--', response);
        if (response.succeeded) {
          CustomToast({ message: 'Your OTP', description: response.ResponseBody.otp, position: 'top', type: 'success', });
          navigation.navigate(RouteName.OTP_VERIFY, { fromScreen: 'forgotpass', userToken: response.ResponseBody.token,email:values.email });
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
      isAuth={true}
      isBackButton={true}
      onBackPress={() => {
        navigation.goBack();
      }}
      style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 0 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <Spacing space={SH(40)} />
        <AuthImgComp icon={imagePaths.forgot_img} />
        <AuthBottomContainer>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              btnForgot(values, resetForm);
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
                  <Text style={styles.heading}>{t('forgotpass.forgotPassword')}</Text>
                  <Text style={styles.subtitile}>
                    {t('forgotpass.subtitle')}
                  </Text>
                  <Inputs
                    placeholder={t('placeholders.email')}
                    inputStyle={{ color: Colors.textWhite }}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
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
                </View>

                <Buttons
                  buttonStyle={styles.brnContainer}
                  textColor={Colors.themeColor}
                  title={t('forgotpass.sendotp')}
                  onPress={() => {
                    handleSubmit();
                    Keyboard.dismiss();
                  }}
                  isLoading={otpLoader}
                />
              </View>
            )}
          </Formik>
        </AuthBottomContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgwhite,
  },
  brnContainer: { backgroundColor: Colors.bgwhite, marginTop: SH(200) },
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
  bottomInnerContainer: {
    paddingVertical: SH(35),
    paddingHorizontal: SW(20),
    // justifyContent: 'space-between',
    height: '100%',
    // paddingBottom: SH(100),
  },
});

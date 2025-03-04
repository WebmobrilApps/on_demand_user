import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AppHeader,
  Container,
  ImageLoader,
  Spacing,
} from '../../component';
import {Colors, Fonts, regex, SF, SH, SW} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import imagePaths from '../../assets/images';
import {useTranslation} from 'react-i18next';
import VectorIcon from '../../component/VectoreIcons';
import Inputs from '../../component/Input';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type ProfileSetupProps = {};
const ProfileSetup: React.FC<ProfileSetupProps> = ({}) => {
  const {t} = useTranslation();
  const navigation = useNavigation<any>();
  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .min(3, t('validation.fullnameMinLength'))
      .required(t('validation.emptyFullName'))
      .matches(regex.NAME_REGEX, t('validation.validFullName')),
    email: Yup.string()
      .matches(regex.EMAIL_REGEX_WITH_EMPTY, t('validation.validEmail'))
      .required(t('validation.emptyEmail')),
    mobileno: Yup.string()
      .matches(regex.DIGIT_REGEX, t('validation.validMobile'))
      .min(10, t('validation.mobileMinLen'))
      .required(t('validation.emptyMobile')),
  });
  return (
    <Container>
      <AppHeader
        headerTitle={t('profile.profileSetup')}
        onPress={() => {
          navigation.goBack();
        }}
        Iconname="arrowleft"
        rightOnPress={() => {}}
        headerStyle={styles.header}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.userConImage}>
              <ImageLoader
                source={imagePaths.user_img}
                resizeMode="cover"
                mainImageStyle={styles.userImage}
              />
              <TouchableOpacity style={styles.editIcon}>
                <VectorIcon
                  color={Colors.textWhite}
                  size={SW(12)}
                  name="camera"
                  icon="Entypo"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>John Kevin</Text>
              <Text style={styles.userPhone}>+91 1234567890</Text>
            </View>
          </View>
          <Formik
            initialValues={{
              fname: '',
              mobileno: '',
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
              // btnSignup(values, resetForm);
            }}>
            {({
              handleChange,
              setFieldTouched,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <Inputs
                  placeholder={''}
                  inputStyle={styles.inputText}
                  onChangeText={handleChange('fname')}
                  onBlur={() => setFieldTouched('fname')}
                  value={values.fname}
                  errorMessage={
                    touched.fname && errors.fname && errors.fname
                      ? errors.fname
                      : ''
                  }
                  label={t('placeholders.fullname')}
                  inputContainerStyle={styles.inputContainer}
                  inputType="default"
                  placeholderTextColor={Colors.placeHolderColor}
                />

                <Spacing space={SH(20)} />
                <Inputs
                  placeholder={''}
                  inputStyle={styles.inputText}
                  onChangeText={handleChange('mobileno')}
                  onBlur={() => setFieldTouched('mobileno')}
                  value={values.mobileno}
                  errorMessage={
                    touched.mobileno && errors.mobileno && errors.mobileno
                      ? errors.mobileno
                      : ''
                  }
                  inputType="number-pad"
                  label={t('placeholders.mobileno')}
                  inputContainerStyle={styles.inputContainer}
                />
                <Spacing space={SH(20)} />

                <Inputs
                  placeholder={t('placeholders.email')}
                  inputStyle={styles.inputText}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  inputType="email-address"
                  value={values.email}
                  errorMessage={
                    touched.email && errors.email && errors.email
                      ? errors.email
                      : ''
                  }
                  placeholderTextColor={Colors.placeHolderColor}
            
                  label={t('placeholders.emailId')}
                  inputContainerStyle={styles.inputContainer}
                />
                <Spacing space={SH(25)} />
                <View style={styles.addressContainer}>
                  <View style={styles.addressInfo}>
                    <Text style={styles.addressName}>John Kevin</Text>
                    <Text style={styles.addressPhone}>+91 1234567890</Text>
                  </View>
                  <TouchableOpacity style={styles.addressMoreIcon}>
                    <VectorIcon
                      icon="Entypo"
                      name="dots-three-vertical"
                      size={SW(20)}
                      color={Colors.textAppColor}
                    />
                  </TouchableOpacity>
                </View>

                <Buttons
                  buttonStyle={styles.addAddressButton}
                  textColor={Colors.textWhite}
                  buttonTextStyle={styles.addAddressText}
                  title={t('placeholders.AddNewAddress')}
                  onPress={() => {
                    //   handleSubmit();
                    Keyboard.dismiss();
                  }}
                  // isLoading={true}
                />

                <Buttons
                  buttonStyle={styles.submitButton}
                  textColor={Colors.textWhite}
                  title={t('placeholders.save')}
                  onPress={() => {
                    handleSubmit();
                    Keyboard.dismiss();
                  }}
                  // isLoading={true}
                />
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(25),
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: SW(25),
    paddingVertical: SH(20),
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SH(20),
  },
  userConImage: {
    width: SH(70),
    height: SH(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.borderColor,
    borderRadius: SH(68) / 2,
  },
  userImage: {
    width: SH(66),
    height: SH(66),
    borderRadius: SH(66) / 2,
  },
  editIcon: {
    position: 'absolute',
    zIndex: 99,
    padding: 5,
    right: -5,
    bottom: 0,
    borderRadius: 6,
    backgroundColor: Colors.themeColor,
  },
  userInfo: {
    marginTop: 10,
  },
  userName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(16),
  },
  userPhone: {
    fontFamily: Fonts.REGULAR,
    fontSize: SF(12),
    marginTop: SH(5),
  },
  inputText: {
    color: Colors.textAppColor,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.textAppColor,
  },
  addressContainer: {
    borderRadius: SW(10),
    paddingVertical: SW(15),
    paddingHorizontal: SW(15),
    borderWidth: 1,
    borderColor: Colors.textAppColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressInfo: {
    width: '80%',
  },
  addressName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(16),
  },
  addressPhone: {
    fontFamily: Fonts.REGULAR,
    fontSize: SF(12),
  },
  addressMoreIcon: {
    paddingVertical: 5,
    paddingLeft: 5,
  },
  addAddressButton: {
    backgroundColor: Colors.themeColor,
    height: 32,
    width: '40%',
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  addAddressText: {
    fontSize: SF(12),
  },
  submitButton: {
    backgroundColor: Colors.themeColor,
    marginTop: SH(70),
  },
});

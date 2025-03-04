import React, {useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
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
  SW,
  validationMSG,
} from '../../utils';
import {
  AppHeader,
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
import {useNavigation, useRoute} from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';

type PrivacyPolicyProps = {};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({}) => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  let title = route?.params?.title
  return (
    <Container style={styles.container}>
      <AppHeader
        headerTitle={title}
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        rightOnPress={() => {}}
        headerStyle={{backgroundColor: '#f9f9f9'}}
        titleStyle={{color: '#333', fontSize: SF(18)}}
      />
      <View style={{padding:20}}>
        <Text style={{fontFamily:Fonts.REGULAR,lineHeight:SH(20),color:Colors.textAppColor}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </Text>
      </View>
    </Container>
  );
};

export default PrivacyPolicy;

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
    height: 2,
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
    shadowOffset: {width: 0, height: 1},
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
});

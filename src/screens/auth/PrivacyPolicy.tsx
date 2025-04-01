import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../component/Input';
import imagePaths from '../../assets/images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import { useGetTermAndCondQuery } from '../../services';
import RenderHtml from 'react-native-render-html';
type PrivacyPolicyProps = {};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ }) => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  let title = route?.params?.title
  const { data: termAndCond, refetch, isLoading,error } = useGetTermAndCondQuery();
  const [data, setData] = useState(null)

  useEffect(() => {
    if (termAndCond?.ResponseBody?.length > 0) {
      let data = title == 'Privacy Policy' ? termAndCond.ResponseBody[0]?.content : termAndCond.ResponseBody[3]?.content;
      setData(data)
    }
  }, [termAndCond])



  if (isLoading) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator color={'red'} />
  </View>

  return (
    <Container style={styles.container}>
      <AppHeader
        headerTitle={title}
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        rightOnPress={() => { }}
        headerStyle={{ backgroundColor: '#ffffff',  }}
        titleStyle={{ color: '#333', fontSize: SF(18) }}
      />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {
          data ?
            <RenderHtml
              contentWidth={400}
              source={{
                html: `${data}`
              }}
            /> :
            <Text style={{ fontFamily: Fonts.REGULAR, lineHeight: SH(20), color: Colors.textAppColor }}>Something went wrong</Text>
        }
        {
          error  && <Text style={{ fontFamily: Fonts.REGULAR, lineHeight: SH(20), color: Colors.textAppColor }}>Something went wrong</Text>
        }
       
      </ScrollView>
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
});

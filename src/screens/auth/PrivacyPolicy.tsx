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
});

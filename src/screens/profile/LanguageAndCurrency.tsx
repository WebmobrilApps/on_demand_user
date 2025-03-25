import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  AppHeader,
  Container,
  LanguageAndCurrencyPopup,
  ProfileList,
  Spacing,
} from '../../component';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import { currencyData, languageData } from '../../utils/StaticData';

type LanguageAndCurrencyProps = {};
const LanguageAndCurrency: React.FC<LanguageAndCurrencyProps> = ({}) => {

  const {t} = useTranslation();
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>(languageData);
  const [title, setTitle] = useState<any>(t('profile.languageSettings'));

  let languageJson = {
    name: t('languageSetting.language'),
    id: 10,
    onClick: () => {
      btnPress('language');
    },
  };

  let currencyJson = {
    name: t('languageSetting.currencySwitcher'),
    id: 10,
    onClick: () => {
      btnPress('currency');
    },
  };

  const btnPress = (type: string) => {
    if (type === 'language') {
      setData(languageData);
      setTitle(t('profile.languageSettings'));
      setModalVisible(true);
    } else {
      setTitle(t('languageSetting.currencySwitcher'));
      setData(currencyData);
      setModalVisible(true);
    }
  };

  return (
    <Container isPadding={true}>
      <LanguageAndCurrencyPopup
        title={title}
        data={data}
        clodeModal={() => {
          setModalVisible(false);
        }}
        modalVisible={modalVisible}
      />
      <AppHeader
        headerTitle={t('profile.languageSettings')}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.pop();
          }
        }}
        Iconname="arrowleft"
        rightOnPress={() => {}}
        headerStyle={styles.header}
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>
          {t('languageSetting.supportSection')}
        </Text>
        <ProfileList item={languageJson} />
        <Spacing space={SH(20)} />
        <Text style={styles.sectionTitle}>
          {t('languageSetting.currencyConverter')}
        </Text>
        <ProfileList item={currencyJson} />
      </View>
    </Container>
  );
};

export default LanguageAndCurrency;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(25),
  },
  container: {
    paddingHorizontal: SW(25),
    paddingTop: SH(40),
  },
  sectionTitle: {
    color: Colors.textAppColor,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(16),
    marginBottom: SH(25),
    marginTop: SH(5),
  },
});

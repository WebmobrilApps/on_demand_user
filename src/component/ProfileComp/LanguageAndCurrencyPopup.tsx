import React from 'react';
import { Alert, FlatList, I18nManager, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Container from '../Container';
import AppHeader from '../AppHeader';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import i18next from 'i18next';
import RNRestart from 'react-native-restart';
type LanguageAndCurrencyPopupProps = {
  modalVisible: boolean;
  clodeModal: () => void;
  title: string;
  data: any
};
const LanguageAndCurrencyPopup: React.FC<LanguageAndCurrencyPopupProps> = ({
  modalVisible = true,
  clodeModal,
  title = '',
  data,
}) => {
  return (
    <Modal
      animationType="slide" // Can be "slide", "fade", or "none"
      transparent={true} // Makes the background semi-transparent
      visible={modalVisible}
      onRequestClose={() => clodeModal()} // Android back button handler
    >
      <Container>
        <AppHeader
          headerTitle={title}
          onPress={() => {
            clodeModal();
          }}
          Iconname="arrowleft"
          rightOnPress={() => { }}
          headerStyle={styles.header}
        />
        <View style={styles.container}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: SH(20),
            }}
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableOpacity onPress={() => {
                    console.log('i18next.language===', i18next.language === 'ar');
                    i18next.changeLanguage(i18next.language === 'ar' ? 'en' : 'ar').then(() => {
                      I18nManager.allowRTL(i18next.language === 'ar');
                      I18nManager.forceRTL(i18next.language === 'ar');
                      RNRestart.Restart()
                    })
                  }} style={styles.itemContainerDeactive}>
                    <Image
                      source={item.image}
                      style={{ width: SW(35), height: SH(25) }}
                    />
                    <Text style={styles.textCountryDeac}>{item.name}</Text>
                  </TouchableOpacity>
                </>
              );
            }}
            keyExtractor={item => item.name}
          />
        </View>
      </Container>
    </Modal>
  );
};

export default LanguageAndCurrencyPopup;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(25),
  },
  container: {
    paddingHorizontal: SW(25),
    paddingTop: SH(40),
  },
  separator: {
    height: SH(1),
    backgroundColor: 'red',
  },
  itemContainerDeactive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: SF(54),
    paddingHorizontal: SW(15),
    borderBottomWidth: 1,
    borderColor: `${Colors.textAppColor}50`,
  },
  textCountryDeac: {
    fontFamily: Fonts.REGULAR,
    fontSize: SF(16),
    marginLeft: SW(10),
  },
});

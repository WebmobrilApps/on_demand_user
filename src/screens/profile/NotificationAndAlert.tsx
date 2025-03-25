import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AppHeader, Container, ProfileList, Spacing} from '../../component';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Switch} from 'react-native-switch';

type NotificationAndAlertProps = {};
const NotificationAndAlert: React.FC<NotificationAndAlertProps> = ({}) => {
  const {t} = useTranslation();
  const navigation = useNavigation<any>();

  const renderToggleSetting = (
    label: string,
    value: boolean,
    onToggle: (val: boolean) => void,
  ) => {
    return (
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>{label}</Text>
        <Switch
          value={value}
          onValueChange={onToggle}
          backgroundActive={Colors.themeColor}
          backgroundInactive={Colors.switchOff}
          activeText={''}
          inActiveText={''}
          barHeight={20}
          circleSize={20}
          switchWidthMultiplier={2.5}
        />
      </View>
    );
  };

  let bookingStatus = {name: 'Booking Changes', id: 10, onClick: () => {}};
  let invoicingjson = {name: 'Invoicing', id: 10, onClick: () => {}};
  let periodicjson = {name: 'Periodic Updates', id: 10, onClick: () => {}};

  return (
    <Container isPadding={true}>
      <AppHeader
        headerTitle={t('profile.notificationsAlerts')}
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
        <Text style={styles.sectionTitle}>Support Section</Text>
        <View style={styles.toggleWrapper}>
          {renderToggleSetting('Booking Confirmations', true, val =>
            console.log(val),
          )}
          {renderToggleSetting('Service Reminders', false, val =>
            console.log(val),
          )}
          {renderToggleSetting('Promotions', true, val => console.log(val))}
        </View>
        <Text style={styles.sectionTitle}>SMS Alerts</Text>
        <ProfileList item={bookingStatus} />
        <Spacing space={SH(20)} />
        <Text style={styles.sectionTitle}>Email Notifications</Text>
        <ProfileList item={invoicingjson} />
        <Spacing space={SH(18)} />
        <ProfileList item={periodicjson} />
      </View>
    </Container>
  );
};

export default NotificationAndAlert;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(25),
  },
  container: {
    paddingHorizontal: SW(25),
    paddingTop: SH(40),
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SH(20),
 
  },
  toggleLabel: {
    fontFamily: Platform.OS === 'android' ? Fonts.MEDIUM : Fonts.REGULAR,
    fontSize: SF(14),
  },
  sectionTitle: {
    color: Colors.textAppColor,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(16),
    marginBottom: SH(25),
    marginTop: SH(5),
  },
  toggleWrapper: {
    paddingHorizontal: SW(10),
  },
});

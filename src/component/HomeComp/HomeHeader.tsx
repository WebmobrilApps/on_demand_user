import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import VectorIcon from '../VectoreIcons';
import imagePaths from '../../assets/images';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';

interface HomeHeaderProps {
  onclickAdd?: (text: string) => void;
  onclicCalender?: (text: string) => void;
  onclicHeart?: (text: string) => void;
  onclicNotification?: (text: string) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  onclickAdd = () => { },
  onclicCalender = () => { },
  onclicHeart = () => { },
  onclicNotification = () => { },
}) => {

  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.bottomBordeRa}
      colors={[Colors.themeDarkColor, Colors.themeColor]}>
      <View style={[styles.container, styles.bottomBordeRa, { paddingTop: Platform.OS == 'android' ? getStatusBarHeight() : 0 }]}>
        <View style={styles.leftView}>
          <VectorIcon
            name="location-sharp"
            size={SF(24)}
            icon="Ionicons"
            color={Colors.white}
          />
          <View style={styles.locationContainer}>
            <Text style={styles.currentLocationText}>Current Location</Text>
            <View style={styles.locationRow}>
              <Text numberOfLines={1} style={styles.cityText}>
                New York City
              </Text>
              <Image source={imagePaths.down} style={styles.downIcon} />
            </View>
          </View>
        </View>
        <View style={styles.rightView}>
          {/* <TouchableOpacity style={styles.iconButton}>
          <Image source={imagePaths.calender_icon} style={styles.icon} />
        </TouchableOpacity> */}
          <TouchableOpacity style={styles.iconButton}>
            <Image source={imagePaths.heart_icon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={()=>{
            navigation.navigate(RouteName.NOTIFICATION)
          }}>
            <Image source={imagePaths.notification_icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
export default HomeHeader;
const styles = StyleSheet.create({
  bottomBordeRa: { borderBottomLeftRadius: SW(30), borderBottomRightRadius: SW(30), },
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: SH(20)
  },
  leftView: {
    width: '60%',
    paddingHorizontal: SW(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationContainer: {
    marginLeft: SW(10),
  },
  currentLocationText: {
    fontSize: SF(12),
    color: Colors.textWhite,
    fontFamily: Fonts.SEMI_BOLD,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityText: {
    fontSize: SF(14),
    color: Colors.textWhite,
    fontFamily: Fonts.BOLD,
  },
  downIcon: {
    height: SH(12),
    width: SH(12),
    marginLeft: SW(7),
    resizeMode: 'contain',
  },
  iconButton: {
    paddingHorizontal: SW(5),
  },
  icon: {
    height: SF(27),
    width: SF(27),
    resizeMode: 'contain',
  },
});

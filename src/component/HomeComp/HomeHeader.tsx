import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import VectorIcon from '../VectoreIcons';
import imagePaths from '../../assets/images';
interface HomeHeaderProps {
  onclickAdd?: (text: string) => void;
  onclicCalender?: (text: string) => void;
  onclicHeart?: (text: string) => void;
  onclicNotification?: (text: string) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  onclickAdd = () => {},
  onclicCalender = () => {},
  onclicHeart = () => {},
  onclicNotification = () => {},
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}
      colors={[Colors.themeDarkColor, Colors.themeColor]}>
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
        <TouchableOpacity style={styles.iconButton}>
          <Image source={imagePaths.notification_icon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomLeftRadius: SW(30),
    borderBottomRightRadius: SW(30),
    flexDirection: 'row',
  },
  leftView: {
    height: SH(70),
    width: '60%',
    paddingHorizontal: SW(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    height: SH(70),
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
    height: SH(27),
    width: SH(27),
    resizeMode: 'contain',
  },
});

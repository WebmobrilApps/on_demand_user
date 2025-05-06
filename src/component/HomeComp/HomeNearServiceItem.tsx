import { View, Text, StyleSFeet, Image, ImageProps, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import imagePaths from '../../assets/images';
import Spacing from '../Spacing';
import StarRating from 'react-native-star-rating-widget';
import RouteName from '../../navigation/RouteName';
import { useNavigation } from '@react-navigation/native';

interface HomeCategoryItemProps {
  name: string;
  image: ImageProps;
  id: string | number;
}

const HomeCategoryItem: React.FC<HomeCategoryItemProps> = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable onPress={() => { navigation.navigate(RouteName.SERVICE_LIST) }} style={styles.container}>
      <View style={styles.header}>
        <Image
          source={imagePaths.electrical}
          resizeMode="cover"
          style={styles.logo}
        />
        <Text style={styles.text}>{'Palmcedar Cleaning'}</Text>
        <Image
          source={imagePaths.verified_star}
          resizeMode="contain"
          style={styles.verifiedIcon}
        />
      </View>
      <Spacing space={10} />
      <View style={styles.ratingContainer}>
        <StarRating starStyle={{ marginHorizontal: 0}} starSize={SF(12)}  onChange={() => { }} color='#FAAC00'  rating={3.5} />
        <Text style={styles.ratingtxt}>{'4.6'}</Text>
      </View>
      <Spacing space={7} />
      <View style={styles.locationContainer}>
        <Image source={imagePaths.service_loc} style={styles.locationIcon} />
        <Text style={styles.addtext}>Ikeja, Nigeria</Text>
        <Text style={styles.dotText}> . </Text>
        <Text style={styles.closetext}>Closed</Text>
      </View>
      <Spacing space={7} />
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Image source={imagePaths.money} style={styles.moneyIcon} />
          <Text style={styles.addtext}>Starts @ $ 30/hr</Text>
        </View>
        <View style={styles.durationContainer}>
          <Text style={styles.dotText}> . </Text>
          <Image source={imagePaths.ClockClockwise} style={styles.clockIcon} />
          <Text style={styles.closetext}>1</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default HomeCategoryItem;

const styles = StyleSheet.create({
  container: {
    width: SW(200),
    marginRight: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: SF(28),
    height: SF(28),
    borderRadius: SF(28) / 2,
  },
  verifiedIcon: {
    width: SF(14),
    height: SF(14),
    marginLeft:SF(8)
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    marginLeft:SF(10)
  },
  ratingContainer: {
    width: SF(90),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    backgroundColor: 'transparent',
  },
  ratingtxt: {
    color: Colors.textAppColor,
    fontFamily: Fonts.REGULAR,
    marginLeft: 5,
    fontSize: SF(12),
  },
  locationContainer: {
    width: SW(90),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    height: SF(15),
    width: SF(15),
    resizeMode: 'contain',
    tintColor: Colors.textAppColor,
  },
  addtext: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    marginLeft: 5,
    fontSize: SF(12),
  },
  closetext: {
    color: Colors.gray2,
    fontFamily: Fonts.MEDIUM,
    marginLeft: 5,
    fontSize: SF(12),
  },
  dotText: {
    fontFamily: Fonts.EXTRA_BOLD,
    fontSize:SF(18),
    marginTop: SF(-8),
    marginLeft: 2,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moneyIcon: {
    height: SF(15),
    width: SF(15),
    resizeMode: 'contain',
    tintColor: Colors.textAppColor,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:SF(9)
  },
  clockIcon: {
    height: SF(12),
    width: SF(12),
    resizeMode: 'contain',
    tintColor: Colors.gray2,
  },
});

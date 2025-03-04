import {View, Text, StyleSheet, Image, ImageProps} from 'react-native';
import React from 'react';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import imagePaths from '../../assets/images';
import Spacing from '../Spacing';
import StarRating from 'react-native-star-rating-widget';

interface HomeCategoryItemProps {
  name: string;
  image: ImageProps;
  id: string | number;
}

const HomeCategoryItem: React.FC<HomeCategoryItemProps> = ({
  name,
  image,
  id,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={imagePaths.service_logo1}
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
        <StarRating starStyle={{marginHorizontal:0}} onChange={()=>{}} starSize={SF(16)} rating={3.5}/>
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
          <Image source={imagePaths.ClockClockwise} style={styles.clockIcon} />
          <Text style={styles.closetext}>1.2 hrs</Text>
        </View>
      </View>
    </View>
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
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: SW(34),
    height: SW(34),
    borderRadius: SW(34) / 2,
  },
  verifiedIcon: {
    width: SW(16),
    height: SW(16),
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SH(13),
    width: SW(130),
  },
  ratingContainer: {
    width: SW(90),
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
    fontSize: SH(12),
  },
  locationContainer: {
    width: SW(90),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    height: SH(15),
    width: SH(15),
    resizeMode: 'contain',
    tintColor: Colors.textAppColor,
  },
  addtext: {
    color: Colors.textAppColor,
    fontFamily: Fonts.REGULAR,
    marginLeft: 5,
    fontSize: SH(12),
  },
  closetext: {
    color: Colors.gray2,
    fontFamily: Fonts.MEDIUM,
    marginLeft: 5,
    fontSize: SH(12),
  },
  dotText: {
    fontFamily: Fonts.EXTRA_BOLD,
    marginTop: -4,
    marginLeft: 2,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moneyIcon: {
    height: SH(15),
    width: SH(15),
    resizeMode: 'contain',
    tintColor: Colors.textAppColor,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    height: SH(12),
    width: SH(12),
    resizeMode: 'contain',
    tintColor: Colors.gray2,
  },
});

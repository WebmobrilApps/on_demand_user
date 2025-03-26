import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import ImageLoader from '../ImageLoader';
import { boxShadow, Colors, Fonts, SH, SW } from '../../utils';
import imagePaths from '../../assets/images';
import { Source } from 'react-native-fast-image';

interface HomeRecommendedItemsProps {
  name: string;
  image: Source;
  id: string | number;
}

const HomeRecommendedItems: React.FC<HomeRecommendedItemsProps> = ({
  name,
  image,
  id,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer,boxShadow]}>
        <ImageLoader source={image} resizeMode="cover" mainImageStyle={styles.imageLoader} />
      </View>
      <Text style={styles.text}>{'Service Name'}</Text>
      <View style={styles.ratingContainer}>
        {/* <Image source={imagePaths.star_filled} resizeMode="contain" style={styles.verifiedIcon} /> */}
        {/* <Text style={styles.ratingtext}>{'4.5'}</Text> */}
      </View>
    </View>
  );
};
export default HomeRecommendedItems;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  imageContainer: {
    shadowRadius: SH(10),
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
  imageLoader: {
    height: SH(100),
    width: SH(135),
    borderRadius: SH(10),
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SH(13),
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  verifiedIcon: {
    width: SW(14),
    height: SW(14),
  },
  ratingtext: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SH(12),
    marginLeft: 5,
  },
});
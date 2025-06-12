import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import ImageLoader from '../ImageLoader';
import { boxShadowlight, Colors, Fonts, SF, SH, SW } from '../../utils';
import imagePaths from '../../assets/images';
import { Source } from 'react-native-fast-image';
import AppText from '../AppText';

interface HomeRecommendedItemsProps {
  name: string;
  image: Source;
  id: string | number;
}
 
const HomeRecommendedItems: React.FC<HomeRecommendedItemsProps> = ({
  image,
}) => {
  return (
    <View>
      <View style={[styles.imageContainer,boxShadowlight]}>
        <ImageLoader source={image} resizeMode="cover" mainImageStyle={styles.imageLoader} />
      </View>
      <AppText style={styles.text}>{'Service Name'}</AppText>
      <View style={styles.ratingContainer}>
        {/* <Image source={imagePaths.star_filled} resizeMode="contain" style={styles.verifiedIcon} /> */}
        {/* <AppText style={styles.ratingtext}>{'4.5'}</AppText> */}
      </View>
    </View>
  );
};
export default HomeRecommendedItems;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
  },
  imageLoader: {
    height: SF(100),
    width: SF(135),
    borderRadius: SF(10),
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    marginTop: 6,
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

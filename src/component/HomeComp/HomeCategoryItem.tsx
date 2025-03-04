import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageProps,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import VectorIcon from '../VectoreIcons';
import imagePaths from '../../assets/images';
import Swiper from 'react-native-swiper';
import ImageLoader from '../ImageLoader';
import { Source } from 'react-native-fast-image';

interface HomeCategoryItemProps {
    name: string,
    image: Source,
    id: string | number
}

const HomeCategoryItem: React.FC<HomeCategoryItemProps> = ({name, image, id}) => {
  return (
    <View style={styles.container}>
      <View>
        <ImageLoader
          source={image}
          resizeMode="cover"
          mainImageStyle={styles.imageLoader}
        />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};
export default HomeCategoryItem;

const styles = StyleSheet.create({
  container: {
    width: SH(78),
    alignItems: 'center',
  },
  imageLoader: {
    height: SH(54),
    width: SH(54),
    borderRadius: SH(54) / 2,
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SH(13),
    marginTop: 5,
  },
});

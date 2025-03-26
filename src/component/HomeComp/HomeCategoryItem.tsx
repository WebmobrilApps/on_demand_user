import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import ImageLoader from '../ImageLoader';
import { Source } from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';

interface HomeCategoryItemProps {
  name: string,
  image: Source,
  id: string | number
}

const HomeCategoryItem: React.FC<HomeCategoryItemProps> = ({ name, image, id }) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable onPress={() => {
      navigation.navigate(RouteName.SHOP_LIST)
    }}
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.8 }, // Slight fade effect when pressed
      ]}
    >
      <View>
        <ImageLoader
          source={image}
          resizeMode="cover"
          mainImageStyle={styles.imageLoader}
        />
      </View>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};
export default HomeCategoryItem;

const styles = StyleSheet.create({
  container: {
    width: SH(90),
    alignItems: 'center',
  },
  imageLoader: {
    height: SH(58),
    width: SH(58),
    borderRadius: SH(58) / 2,
    borderWidth: 1,
    borderColor: Colors.themeColor
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    marginTop: 5,
  },
});

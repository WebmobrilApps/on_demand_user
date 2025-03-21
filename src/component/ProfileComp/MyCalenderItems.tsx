import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import imagePaths from '../../assets/images';
import ImageLoader from '../ImageLoader';

type MyCalenderItemsProps = {
  item: {
    name: string;
    id: number;
    onClick?: () => void;
    datetime?: string;
  };
};

const MyCalenderItems: React.FC<MyCalenderItemsProps> = ({item}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={item.onClick}
      style={styles.container}>
      <View style={styles.leftContainer}>
        <ImageLoader
          source={imagePaths.makup1}
          resizeMode="contain"
          mainImageStyle={styles.leftImage}
        />
      </View>
      <View style={{marginLeft: 10, width: '60%'}}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text2}>{item?.datetime}</Text>
      </View>
      <TouchableOpacity
        style={{
          padding: 6,
          position: 'absolute',
          zIndex: 99,
          right: 10,
          top: 10,
        }}>
        <Image
          source={imagePaths.siren}
          style={{width: SW(16), height: SW(16)}}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MyCalenderItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.themelight,
    paddingHorizontal: SW(18),
    paddingVertical: SH(15),
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(15),
    color: Colors.textAppColor,
  },
  text2: {
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    color: Colors.textAppColor,
    marginTop: SH(3),
  },
  icon: {
    height: SH(18),
    width: SH(18),
  },
  leftContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: Colors.bgwhite,
    borderRadius: SH(15),
    width: SH(115),
    height: SH(85),
  },
  leftImage: {
    width: SH(115),
    height: SH(85),
    borderRadius: SH(15),
  },
});

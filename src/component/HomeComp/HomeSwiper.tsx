import {View, Text, StyleSheet, TouchableOpacity, Image, ImageProps} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import VectorIcon from '../VectoreIcons';
import imagePaths from '../../assets/images';
import Swiper from 'react-native-swiper';

interface swiperData {
  id: number,
  imgUrl: ImageProps
}
interface HomeSwiperProps {
  swiperData: swiperData[]
}

const HomeSwiper: React.FC<HomeSwiperProps> = ({swiperData}) => {
  return (
    <Swiper
      showsButtons={false}
      style={styles.wrapper}
      pagingEnabled={true}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.paginationStyle}>
      {swiperData.map((item: swiperData) => {
        return (
          <View style={styles.slide} key={item.id}>
            <Image style={styles.image} source={item.imgUrl} />
          </View>
        );
      })}
    </Swiper>
  );
};
export default HomeSwiper;

const styles = StyleSheet.create({
  wrapper: {
    height: SH(160),
  },
  dot: {
    backgroundColor: Colors.gray1,
    width: SW(10),
    height: SW(10),
    borderRadius: SW(10) / 2,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: Colors.themeColor,
    width: SW(10),
    height: SW(10),
    borderRadius: SW(10) / 2,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationStyle: {
    bottom: 0,
  },
  slide: {
    height: SH(160),
    borderRadius: SW(10),
    backgroundColor:'#fff',
    paddingHorizontal:SW(25)
  },
  image: {
    height: "100%",
    width: '100%',
    resizeMode: 'cover',
    borderRadius: SW(10),
  },
});

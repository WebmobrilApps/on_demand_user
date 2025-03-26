import { View,StyleSheet} from 'react-native';
import React from 'react';
import { boxShadow, Colors, Fonts, SF, SH, SW } from '../../utils';
import Swiper from 'react-native-swiper';
import ImageLoader from '../ImageLoader';

interface swiperData {
  id: number,
  imgUrl: any
}
interface HomeSwiperProps {
  swiperData: swiperData[]
}

const HomeSwiper: React.FC<HomeSwiperProps> = ({ swiperData }) => {
  return (
    <Swiper
      showsButtons={false}
      style={styles.wrapper}
      pagingEnabled={true}
      autoplay
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.paginationStyle}>
      {swiperData.map((item: swiperData) => {
        return (
          <View style={[styles.slide,]} key={item.id}>
            <View style={[boxShadow, { borderRadius: 10 }]}>
              <ImageLoader resizeMode='cover' mainImageStyle={styles.image} source={item.imgUrl} />
            </View>
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
    backgroundColor: '#fff',
    paddingHorizontal: SW(25),
  },
  image: {
    height: "100%",
    width: '100%',
    borderRadius: SW(10),
  },
});

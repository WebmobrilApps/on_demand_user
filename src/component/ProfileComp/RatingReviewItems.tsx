import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {boxShadowlight, Colors, Fonts, SF, SH, SW} from '../../utils';
import imagePaths from '../../assets/images';
import ImageLoader from '../ImageLoader';
import StarRating from 'react-native-star-rating-widget';

type PaymentHistoryItemProps = {
  item: {
    name: string;
    id: number;
    onClick?: () => void;
    datetime?: string;
    price: string | number;
  };
};

const PaymentHistoryItem: React.FC<PaymentHistoryItemProps> = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.leftContainer,boxShadowlight]}>
          <ImageLoader
            source={imagePaths.makup1}
            resizeMode="cover"
            mainImageStyle={styles.leftImage}
          />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.textprice}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewHeader}>
          <View style={styles.ratingContainer}>
            <StarRating
              starStyle={styles.starStyle}
              onChange={() => {}}
              starSize={SF(18)}
              rating={3.5}
            />
            <Text style={styles.ratingtxt}>{'4.6'}</Text>
          </View>
          <Text style={styles.reviewDate}>25 Jan</Text>
        </View>
        <Text style={styles.reviewText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentHistoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.themelight,
    borderRadius: SF(10),
    padding: SW(12),
  },
  row: {
    flexDirection: 'row',
  },
  itemDetails: {
    marginLeft: 10,
    width: '60%',
  },
  text: {
    marginTop: 2,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(16),
    color: Colors.textAppColor,
  },
  textprice: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(16),
    color: Colors.themeColor,
    marginTop: 3,
  },
  reviewContainer: {
    backgroundColor: Colors.bgwhite,
    padding: SF(10),
    borderRadius: SF(10),
    marginTop: SF(10),
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    width: SW(90),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  starStyle: {
    marginHorizontal: 0,
  },
  ratingtxt: {
    color: Colors.textAppColor,
    fontFamily: Fonts.REGULAR,
    marginLeft: 5,
    fontSize: SF(15),
  },
  reviewDate: {
    fontFamily: Fonts.REGULAR,
    color: Colors.gray2,
    textAlign: 'right',
    fontSize: SF(14),
  },
  reviewText: {
    fontFamily: Fonts.REGULAR,
    color: Colors.gray2,
    textAlign: 'left',
    marginTop: 3,
    fontSize:SF(14)
  },
  leftContainer: {
    borderRadius: SF(10),
    width: SF(115),
    height: SF(85),
    overflow:"hidden"
  },
  leftImage: {
    width: SF(115),
    height: SF(85),
  },
});

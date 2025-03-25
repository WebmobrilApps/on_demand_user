import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable, Keyboard } from 'react-native';
import { Colors, SH, SW, Fonts, SF, boxShadow, rowSpaceBetweenCss, commonStyles } from '../../utils';
import imagePaths from '../../assets/images';
import { AppHeader, Buttons, Container, ImageLoader, Spacing } from '../../component';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import RouteName from '../../navigation/RouteName';

const nearByData = [
  {
    image: `https://cdn.pixabay.com/photo/2024/02/15/13/52/students-8575444_1280.png`,
    name: 'Richar Kandowen',
    id: 1,
    rating: 4.5,
    ratingCount: 450,
    location: 'Ikeja, Nigeria',
    price: 80,
  },
  {
    image: 'https://cdn.pixabay.com/photo/2024/02/15/13/55/ai-generated-8575453_1280.png',
    name: 'Palmcedar Cleaning',
    id: 2,
    rating: 4.5,
    ratingCount: 450,
    location: 'Ikeja, Nigeria',
    price: 80,
  },
];

const MyBookingScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: any }) => (
    <Pressable onPress={() => navigation.navigate(RouteName.SERVICE_DETAILS)} style={styles.serviceContainer}>
      <View style={styles.header}>
        <View style={[styles.imageWrapper, boxShadow]}>
          <ImageLoader source={{uri:item.image}} resizeMode="cover" mainImageStyle={styles.logo} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Haircut + Beard <Text style={{color:Colors.lightGraytext}}>With Juana</Text></Text>
          <Text style={styles.dateTime}>{`06-March-2025 ${'\n'}8:00 am - 8:30 am`}</Text>
          <Text style={styles.dateTime}>{`WM Barbershop`}</Text>
          <Text style={styles.dateTime}>{`1893 Cheshire Bridge Rd Ne, 30325`}</Text>
          <View style={[commonStyles.rowSpaceBetweenCss,{marginTop:7}]}>
            <Text style={styles.price}>{`$1893`}</Text>
            <Buttons
              buttonStyle={styles.bookAgain}
              textColor={Colors.textWhite}
              buttonTextStyle={styles.bookAgainText}
              title={'Book Again'}
              onPress={() => {
                Keyboard.dismiss();
              }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );

  return (
    <Container statusBarColor={Colors.white}>
      <AppHeader
        headerTitle='Appointment'
        onPress={() => { }}
        Iconname=''
        headerStyle={styles.headerStyle}
        titleStyle={styles.headerTitleStyle}
      />
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={nearByData}
        keyExtractor={(item) => `${item.id}-appointment-list`}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: SH(10),
  },
  separator: {
    height: SH(15),
    backgroundColor: Colors.white,
  },
  serviceContainer: {
    marginHorizontal: SW(20),
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    padding: SW(15),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    width: SW(82),
    height: SH(113),
    borderRadius: SW(10) / 2,
    overflow: 'hidden'
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SW(10),
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    maxWidth: '80%',
  },
  dateTime: {
    color: Colors.lightGraytext,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(8),
    maxWidth: '80%',
    marginTop: 2
  },

  price: {
    color: Colors.themeColor,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(15),
    maxWidth: '80%',
    marginTop: 3

  },
  headerStyle: {
    backgroundColor: Colors.bgwhite,
    marginVertical: SH(10),
    marginHorizontal: 10,
    marginBottom: 20
  },
  headerTitleStyle: {
    color: Colors.textHeader,
    fontSize: SF(18),
  },
  bookAgain: {
    backgroundColor: Colors.themeColor,
    height: SH(25),
    width: '40%',
    alignSelf: 'flex-end',
    borderRadius: 6
  },
  bookAgainText: {
    fontSize: SF(10),
    fontFamily:Fonts.SEMI_BOLD
  },
});

export default MyBookingScreen;
import React from 'react';
import { StyleSheet, View, FlatList, Image, StatusBar } from 'react-native';
import { Colors, SH, SW, useDisableGestures } from '../../utils';
import {
  Container,
  HomeCategoryItem,
  HomeHeader,
  HomeNearServiceItem,
  HomeRecommendedItems,
  HomeSearchBar,
  HomeSubContainerHeader,
  HomeSwiper,
} from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import imagePaths from '../../assets/images';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  useDisableGestures();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(Colors.themeDarkColor); // Tomato red color
      StatusBar.setBarStyle('light-content'); // Light content for dark background
      return () => {
        StatusBar.setBackgroundColor('#ffffff'); // Black color
        StatusBar.setBarStyle('dark-content'); // Dark content for light background
      };
    }, []),
  );
  const categoryData = [
    { image: imagePaths.plumb_img, name: 'Plumbing', id: 1 },
    { image: imagePaths.carpentry, name: 'Carpentry', id: 2 },
    { image: imagePaths.painting, name: 'Painting', id: 3 },
    { image: imagePaths.electrical, name: 'Electrical', id: 4 },
    { image: imagePaths.electrical, name: 'Electrical', id: 5 },
    { image: imagePaths.cleaning, name: 'Cleaning', id: 6 },
    { image: imagePaths.cleaning, name: 'Cleaning', id: 7 },
  ];

  const recommendedData = [
    { image: imagePaths.recomanded1, name: 'Plumbing', id: 1 },
    { image: imagePaths.recomanded2, name: 'Carpentry', id: 2 },
    { image: imagePaths.recomanded3, name: 'Painting', id: 3 },
    { image: imagePaths.recomanded1, name: 'Electrical', id: 4 },
    { image: imagePaths.recomanded3, name: 'Cleaning', id: 5 },
  ];

  const swiperData = [
    { imgUrl: imagePaths.banner1, id: 1 },
    { imgUrl: imagePaths.banner1, id: 2 },
    { imgUrl: imagePaths.banner1, id: 3 },
  ];

  return (
    <Container
      isAuth={true}
      statusBarStyle="light-content"
      statusBarColor={Colors.themeDarkColor}>
      <HomeHeader />
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.mHorizontal}>
            <HomeSearchBar />
          </View>
          <View style={styles.swiperContainer}>
            <HomeSwiper swiperData={swiperData} />
          </View>
          {/* Category Section */}
          <HomeSubContainerHeader
            rightText="View All"
            leftText="Browse all categories"
            onClick={() =>
              navigation.navigate(RouteName.VIEW_ALL, {
                title: 'All Categories',
                type: 'category',
              })
            }
          />
          <View style={styles.flatListWrapper}>
            <FlatList
              horizontal
              data={categoryData}
              keyExtractor={(item, index) => item.name + 'cat' + index}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <HomeCategoryItem {...item} />}
            />
          </View>
          {/* Near By Services Section */}
          <HomeSubContainerHeader
            rightText="View All"
            leftText="Service Provider Near You"
            onClick={() =>
              navigation.navigate(RouteName.VIEW_ALL, {
                title: 'Near By Services',
                type: 'near_by',
              })
            }
          />
          
          <FlatList
            horizontal
            contentContainerStyle={styles.flatListContainer}
            data={categoryData}
            keyExtractor={(item, index) => item.name + 'near_by' + index}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <HomeNearServiceItem {...item} />}
          />

          {/* Recommended Section ============*/}
          <HomeSubContainerHeader
            rightText="View All"
            leftText="Recommended for You"
            onClick={() =>
              navigation.navigate(RouteName.VIEW_ALL, {
                title: 'Recommended Services',
                type: 'recommended',
              })
            }
          />
          <FlatList
            horizontal
            data={recommendedData}
            keyExtractor={(item, index) => item.name + 'recomded' + index}
            contentContainerStyle={styles.flatListRecommended}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <HomeRecommendedItems {...item} />}
          />

        </View>

        {/* Bottom Banner Image */}
        <View style={styles.bottomView}>
          <Image
            source={imagePaths.cleaning2}
            resizeMode="cover"
            style={styles.imageBottom}
          />
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default HomeScreen;
// Common spacing styles used in multiple places
const commonSpacing = {
  marginTop: SH(25),
  marginBottom: SH(35),
};
const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: SH(30),
  },
  container: {
    flex: 1,
    paddingVertical: SH(20),
  },
  mHorizontal: {
    paddingHorizontal: SW(25),
  },
  swiperContainer: {
    height: SH(180),
    ...commonSpacing,
  },
  flatListWrapper: {
    paddingHorizontal: SW(15),
    paddingRight: SW(20),
    ...commonSpacing,
  },
  flatListContainer: {
    paddingHorizontal: SW(25),
    backgroundColor: '#EEF6F9',
    paddingVertical: SH(20),
    ...commonSpacing,
  },
  flatListRecommended: {
    marginHorizontal: SW(25),
    ...commonSpacing,
  },
  bottomView: {
    width: '100%',
    paddingHorizontal: SW(25),
    borderRadius: SW(10),
  },
  imageBottom: {
    width: '100%',
    height: SH(200),
    borderRadius: SW(10),
  },
});

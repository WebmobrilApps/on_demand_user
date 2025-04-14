import React from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import { Colors, SF, SH, SW, useDisableGestures } from '../../utils';
import {
  Container,
  HomeHeader,
  HomeNearServiceItem,
  HomeSearchBar,
  HomeSubContainerHeader,
  HomeSwiper,
  Spacing,
} from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import imagePaths from '../../assets/images';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import HomeCategory from '../../component/HomeComp/HomeCategoryItem';
const HomeScreen = () => {
  const navigation = useNavigation<any>();
  useDisableGestures();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(Colors.themeDarkColor);
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBackgroundColor('#ffffff');
        StatusBar.setBarStyle('dark-content');
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
    { image: imagePaths.carpentry, name: 'Carpentry', id: 8 },
    { image: imagePaths.painting, name: 'Painting', id: 11 },
    { image: imagePaths.electrical, name: 'Electrical', id: 9 },
    { image: imagePaths.electrical, name: 'Electrical', id: 10 },
  ];

  // const recommendedData = [
  //   { image: imagePaths.recomanded1, name: 'Plumbing', id: 1 },
  //   { image: imagePaths.recomanded2, name: 'Carpentry', id: 2 },
  //   { image: imagePaths.recomanded3, name: 'Painting', id: 3 },
  //   { image: imagePaths.recomanded1, name: 'Electrical', id: 4 },
  //   { image: imagePaths.recomanded3, name: 'Cleaning', id: 5 },
  // ];

  const swiperData = [
    { imgUrl: imagePaths.banner2, id: 1 },
    { imgUrl: imagePaths.banner2, id: 2 },
    { imgUrl: imagePaths.banner2, id: 3 },
  ];

  return (
    <Container
      isAuth={true}
      statusBarStyle="light-content"
      statusBarColor={Colors.themeDarkColor}
    >
      <HomeHeader />
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.mHorizontal}>
            <HomeSearchBar showFilterIcon={true} />
          </View>

          <HomeSwiper swiperData={swiperData} />
          <Spacing space={SF(40)} />
          {/* Category Section */}
          <HomeSubContainerHeader
            rightText="View All"
            marginHori={'7%'}
            leftText="Browse all categories"
            onClick={() =>
              navigation.navigate(RouteName.VIEW_ALL, {
                title: 'All Categories',
                type: 'category',
              })
            }
          />

          <View style={styles.flatListWrapper}>
            <HomeCategory categoryData={categoryData} isLoading={false} />
          </View>
          {/* Near By Services Section */}
          <HomeSubContainerHeader
            rightText="View All"
            leftText="Service Provider Near You"
            marginHori={'7%'}
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
          {/* <HomeSubContainerHeader
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
          /> */}

        </View>

        {/* Bottom Banner Image */}
        {/* <View style={styles.bottomView}>
          <Image
            source={imagePaths.cleaning2}
            resizeMode="cover"
            style={styles.imageBottom}
          />
        </View> */}
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default HomeScreen;
// Common spacing styles used in multiple places
const commonSpacing = {
  marginTop: SF(17),
  marginBottom: SF(30),
};
const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: SH(30),
  },
  container: {
    flex: 1,
    paddingVertical: SH(10),
  },
  mHorizontal: {
    paddingHorizontal: '7%',
  },
  swiperContainer: {
    height: SF(180),
    ...commonSpacing,
  },
  flatListWrapper: {
    paddingHorizontal: SW(25),
    paddingRight: SW(20),
    ...commonSpacing,
  },
  flatListContainer: {
    paddingHorizontal: '7%',
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

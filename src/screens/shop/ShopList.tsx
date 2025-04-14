import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Container, HomeRecommendedItems, Spacing } from '../../component';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ShopHeader, Shops, SubCatList } from './component';
import imagePaths from '../../assets/images';

interface shopProps { }

const subCatDdata = [
    { text: 'All' },
    { text: 'Hair Salon' },
    { text: 'Barbershop' },
    { text: 'Skin care' },
    { text: 'Makeup' },
    { text: 'Barbershop' },
    { text: 'Skin care' },
    { text: 'Makeup' },
];

const recommendedData = [
    { image: imagePaths.recomanded1, name: 'Plumbing', id: 1 },
    { image: imagePaths.recomanded2, name: 'Carpentry', id: 2 },
    { image: imagePaths.recomanded3, name: 'Painting', id: 3 },
    { image: imagePaths.recomanded1, name: 'Electrical', id: 4 },
    { image: imagePaths.recomanded3, name: 'Cleaning', id: 5 },
];

const SeparatorComponent = () => <Spacing space={SH(15)} />;
const SeparatorComponentSpecialOffer = () => <Spacing horizontal space={SH(15)} />;

const ShopList: React.FC<shopProps> = () => {

    const listHeader = () => (
        <Text style={styles.listHeaderText}>Barber shop (250)</Text>
    );

    return (
        <Container isAuth statusBarStyle="light-content" statusBarColor={Colors.themeDarkColor}>
            <ShopHeader />
            <KeyboardAwareScrollView
                bounces={false}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Spacing />
                <View style={styles.paddHori}>
                    <SubCatList data={subCatDdata} />
                </View>

                <Text style={[styles.specialOffersText,styles.marHori]}>Special Offers</Text>
                <View style={[styles.specialOfferConatiner,{}]}>
                    <FlatList
                        horizontal
                        data={recommendedData}
                        keyExtractor={(item, index) => item.name + 'recomded' + index}
                        contentContainerStyle={styles.flatListRecommended}
                        ItemSeparatorComponent={SeparatorComponentSpecialOffer}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <HomeRecommendedItems {...item} />}
                    />
                </View>
                <FlatList
                    data={recommendedData}
                    keyExtractor={(item, index) => item.name + 'baber-shop' + index}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={SeparatorComponent}
                    ListHeaderComponent={listHeader}
                    renderItem={({ item, index }) => (
                        <Shops item={item} index={index} />
                    )}
                />
            </KeyboardAwareScrollView>
        </Container>
    );
};

export default ShopList;

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: SH(30),
    },
    paddHori: {
        paddingHorizontal: '5%',
    },
    marHori: {
        marginHorizontal: '5%',
    },
    specialOfferConatiner: {
        marginRight: '3%',
        marginLeft: '3.3%',
    },
    flatListRecommended: {
        marginBottom: SH(35),
        marginTop: SH(15),
        marginHorizontal: '2%'
    },
    specialOffersText: {
        marginTop: SF(15),
        marginHorizontal: SW(25),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
        fontSize: SF(14)
    },
    listHeaderText: {
        marginHorizontal: '5%',
        marginBottom: SH(20),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
        fontSize: SF(14)
    },
    topImage: {
        height: '190%',
        width: '100%',
    },
    bottomImg: {
        height: '100%',
        width: '100%',
    },
    topImageContainer: {
        height: SH(90),
        borderRadius: SW(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bgwhite,
        overflow: 'hidden',
    },
    topImagesmallContainer: {
        height: SH(82),
        width: '23.5%',
        borderRadius: SW(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bgwhite,
        marginTop: SH(7),
        overflow: 'hidden',
    },
    itemContainer: {
        marginHorizontal: SW(25),
    },
    topImagesWrapper: {
        backgroundColor: '#0000001A',
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: SW(10),
    },
    smallImagesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInfoRow: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textBlock: {
        width: '72%',
    },
    shopName: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
        fontSize: SF(12),
    },
    shopAddress: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.lightGraytext,
        fontSize: SF(10),
    },
    reviewBlock: {
        width: '26%',
    },
    reviewText: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
        fontSize: SF(14),
        textAlign: 'center',
        lineHeight: SH(17),
    },
});

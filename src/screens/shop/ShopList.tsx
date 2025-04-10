import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Container, HomeRecommendedItems } from '../../component';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ShopHeader, SubCatList } from './component';
import imagePaths from '../../assets/images';
interface shopProps {

}

const subCatDdata = [
    {
        text: 'All',
    },
    {
        text: 'Hair Salon',
    },
    {
        text: 'Barbershop',
    },
    {
        text: 'Skin care',
    },
    {
        text: 'Makeup',
    },
    {
        text: 'Barbershop',
    },
    {
        text: 'Skin care',
    },
    {
        text: 'Makeup',
    },
]
const recommendedData = [
    { image: imagePaths.recomanded1, name: 'Plumbing', id: 1 },
    { image: imagePaths.recomanded2, name: 'Carpentry', id: 2 },
    { image: imagePaths.recomanded3, name: 'Painting', id: 3 },
    { image: imagePaths.recomanded1, name: 'Electrical', id: 4 },
    { image: imagePaths.recomanded3, name: 'Cleaning', id: 5 },
];


const ShopList: React.FC<shopProps> = ({ }) => {
    const [selectedSubCat, setSelectedSubCat] = useState(['All'])
    return <Container
        isAuth={true}
        statusBarStyle="light-content"
        statusBarColor={Colors.themeDarkColor}
    >
        <ShopHeader />
        <KeyboardAwareScrollView
            bounces={false}
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ ...paddHori }}>
                <SubCatList data={subCatDdata} />
            </View>
            <Text style={{ marginTop: SH(15), ...marHori, fontFamily: Fonts.SEMI_BOLD, color: Colors.textAppColor }}>Special Offers</Text>
            <FlatList
                horizontal
                data={recommendedData}
                keyExtractor={(item, index) => item.name + 'recomded' + index}
                contentContainerStyle={styles.flatListRecommended}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <HomeRecommendedItems {...item} />}
            />
        </KeyboardAwareScrollView>
    </Container>
}
export default ShopList

const marHori = {
    marginHorizontal: SW(25)
}
const paddHori = {
    paddingHorizontal: SW(25)
}
const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: SH(30),
    },
    flatListRecommended: {
        marginBottom: SH(35),
        marginTop: SH(15),
        ...marHori
    },
});
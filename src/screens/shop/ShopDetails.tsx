import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader, Container, ImageLoader, Spacing, VectoreIcons } from '../../component';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import imagePaths from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { Portfolio, Reviews, Services } from './component';

interface shopProps { }
const shopDetailTabs = [
    { id: 1, name: 'Services' },
    { id: 2, name: 'Reviews' },
    { id: 3, name: 'Portfolio' },
    { id: 4, name: 'Details' },
];

const ShopDetails: React.FC<shopProps> = () => {
    const navigation = useNavigation<any>();
    const [activeTab, setActiveTabs] = useState<string>('services');
    return (
        <Container isPadding={false}>
            <Spacing />
            <AppHeader
                headerTitle={''}
                onPress={() => {
                    navigation.goBack();
                }}
                Iconname="arrowleft"
                rightOnPress={() => { }}
                headerStyle={styles.header}
            />
            <ScrollView
                bounces={false}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.bannerContainer}>
                    <ImageLoader
                        source={imagePaths.barber5}
                        mainImageStyle={styles.bannerImage}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.shopInfoContainer}>
                    <View style={styles.shopTextBlock}>
                        <Text style={styles.shopTitle}>
                            WM Barbershop <Text style={styles.shopCount}>(250)</Text>
                        </Text>
                        <Text style={styles.shopAddress}>
                            1893 Cheshire Bridge Rd Ne, 30325 {'\n'}Home Service
                        </Text>
                    </View>
                    <View style={styles.iconsBlock}>
                        <VectoreIcons
                            icon="Feather"
                            name="share-2"
                            size={SF(20)}
                            color={Colors.black}
                        />
                        <VectoreIcons
                            icon="FontAwesome"
                            name="heart-o"
                            size={SF(20)}
                            color={Colors.black}
                            style={styles.heartIcon}
                        />
                    </View>
                </View>
                {/* tabs=========== */}
                <View style={styles.tabBar}>
                    {
                        shopDetailTabs.map((item, index) => {
                            return <Pressable onPress={() => { setActiveTabs(item.name.toLowerCase()); }} key={index.toString() + 'tabs'}>
                                <Text style={activeTab === item.name.toLowerCase() ? styles.activeTab : styles.inactiveTab}>{item.name}</Text>
                            </Pressable>;
                        })
                    }
                </View>
                <Spacing />
                {activeTab === 'services' && <Services />}
                {activeTab === 'reviews' && <Reviews />}
                {activeTab === 'portfolio' && <Portfolio />}
          
                {/* pages=========== */}

            </ScrollView>
        </Container>
    );
};

export default ShopDetails;

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.bgwhite,
        paddingHorizontal: SW(30),
    },
    scrollContainer: {
        paddingBottom: SH(30),
    },
    bannerContainer: {
        width: '90%',
        height: SF(200),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -20,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    shopInfoContainer: {
        backgroundColor: '#0000000D',
        paddingVertical: SH(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '7%',
    },
    shopTextBlock: {
        width: '66%',
    },
    shopTitle: {
        fontSize: SF(14),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.txtAppDarkColor,
    },
    shopCount: {
        fontSize: SF(10),
        fontFamily: Fonts.MEDIUM,
        color: Colors.txtAppDarkColor,
    },
    shopAddress: {
        fontSize: SF(10),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.lightGraytext,
        marginTop: 2,
    },
    iconsBlock: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    heartIcon: {
        marginLeft: 12,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: SH(20),
        backgroundColor: Colors.white,
        borderBottomWidth: 0.6,
        borderColor: '#3D3D3D40',
        paddingHorizontal: '7%',
    },
    activeTab: {
        fontSize: SF(14),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.themeColor,
        textDecorationLine: 'underline',
    },
    inactiveTab: {
        fontSize: SF(14),
        fontFamily: Fonts.MEDIUM,
        color: Colors.txtAppDarkColor,
    },
});

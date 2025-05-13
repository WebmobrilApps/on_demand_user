import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Colors, SH, SW, Fonts, SF, boxShadow } from '../../utils';
import imagePaths from '../../assets/images';
import { AppHeader, Buttons, Container, Divider,  ImageLoader, Spacing, SubHeading, VectoreIcons } from '../../component';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import RouteName from '../../navigation/RouteName';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ServiceDetails: React.FC = () => {
    const navigation = useNavigation<any>();

    return (
        <Container statusBarColor={Colors.white}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}
                extraScrollHeight={SH(40)}>
                <AppHeader
                    headerTitle='Service Provider'
                    onPress={navigation.goBack}
                    Iconname='arrowleft'
                    headerStyle={styles.headerStyle}
                    titleStyle={styles.headerTitleStyle}
                />

                <View style={styles.serviceContainer}>
                    <View style={styles.serviceImageContainer}>
                        <ImageLoader source={imagePaths.carpentry} resizeMode='cover' mainImageStyle={styles.serviceImage} />
                    </View>
                    <View style={styles.serviceInfoContainer}>
                        <View style={styles.serviceDetails}>
                            <Text style={styles.serviceTitle}>Richar Kandowen</Text>
                            <Text style={styles.serviceAddress}>Chestnut Street, Rome, NY</Text>
                            <Text style={styles.serviceAddress}>Years In Service: 10 years</Text>
                        </View>
                        <View style={styles.serviceRatingContainer}>
                            <View style={styles.ratingWrapper}>
                                <Image source={imagePaths.star_f} style={styles.starIcon} />
                                <Text style={styles.ratingText}><Text style={styles.ratingValue}> 4.4</Text> (532)</Text>
                            </View>
                            <Text style={styles.priceText}><Text style={styles.priceValue}>$80 </Text>Per hr.</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.marginHori, { marginTop: SF(20) }]}>
                    <Text style={styles.sectionTitle}>About Provider</Text>
                    <Text style={styles.aboutText}>Office ipsum you must be muted. Where territories team eye technologically then price bandwagon. Cost shelf-ware cross illustration scope fured latest no-brainer skulls pee.</Text>

                    <Divider contStyle={styles.divider} color='#3D3D3D1A' />


                    <Text style={styles.sectionTitle}>Operating Hours</Text>
                    {[
                        { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
                        { day: 'Saturday', time: '11:00 AM - 4:00 PM' }
                    ].map((item, index) => (
                        <View key={index} style={styles.operatingHoursRow}>
                            <Text style={styles.operatingHoursText}>{item.day}</Text>
                            <Text style={[styles.operatingHoursText,{fontSize:SF(12)}]}>{item.time}</Text>
                        </View>
                    ))}

                    <Spacing space={20} />
                    <Text style={styles.sectionTitle}>Services Offered</Text>
                    {[1, 2].map((_, index) => (
                        <View key={index} style={styles.serviceOfferedContainer}>
                            <View style={styles.serviceOfferedRow}>
                                <Text style={styles.serviceOfferedText}>Service Name</Text>
                                <Text style={[styles.serviceOfferedText,{fontSize:SF(12)}]}>Availability: X days</Text>
                            </View>
                            <Text style={styles.servicePriceText}>Price: $XX, Duration: X hours</Text>
                        </View>
                    ))}

                    <Spacing space={10} />

                </View>
                <View style={{ paddingHorizontal: '7%' }}>
                    <Spacing space={20} />
                    <SubHeading
                        rightText="View All"
                        marginHori={0}
                        leftText="Gallery"
                        onClick={() =>null}
                    />
                    {/* image gallery--- */}
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <ImageLoader source={imagePaths.electric_wire} resizeMode='cover' mainImageStyle={styles.galleryUpImage} />
                            <TouchableOpacity style={{position:'absolute',zIndex:9999,alignItems:"center",justifyContent:'center',height:SF(30),width:SF(30),backgroundColor:"#909090",borderRadius:SF(15)}}>
                                <VectoreIcons
                                    icon='FontAwesome'
                                    name='play'
                                    size={SF(18)}
                                    color={Colors.white}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.galleryBottomCont}>
                            <View style={styles.galleryColCont}>
                                <ImageLoader source={imagePaths.cleaning2} resizeMode='cover' mainImageStyle={styles.galleryColImga} />
                            </View>
                            <View style={styles.galleryColCont}>
                                <ImageLoader source={imagePaths.plumb_img} resizeMode='cover' mainImageStyle={styles.galleryColImga} />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.sectionTitle}>User Reviews</Text>

                    <FlatList
                        data={[1, 2]}
                        keyExtractor={(item, index) => index.toString() + 'user_review'}
                        horizontal
                        contentContainerStyle={{marginVertical:SH(10)}}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item, index }) => {
                            return <View style={styles.reviewCard}>
                                <View style={styles.alignCenter}>
                                    <View style={styles.reviewUserCont}>
                                        <View>
                                            <ImageLoader resizeMode='cover' source={imagePaths.cleaning} mainImageStyle={styles.reviewUserImage} />
                                        </View>
                                        <Text style={styles.reviewUserNamee}>User 1</Text>
                                    </View>
                                    <StarRating starSize={SF(14)} rating={4} onChange={() => { }} starStyle={{ marginHorizontal: 0 }} />
                                </View>
                                <Text style={styles.reviewText}>Great Conrests! Office ipsum you must be muted. They awareness done regroup driver's without my.</Text>
                            </View>
                        }}
                    />
                    <Buttons buttonStyle={{marginVertical:SH(15)}} title='Book Appointment'/>
                </View>
            </KeyboardAwareScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: { paddingBottom: 20 },
    marginHori: { marginHorizontal: '7%' },
    headerStyle: { backgroundColor: Colors.bgwhite, marginVertical: SH(10), marginHorizontal: 10, marginBottom: 20 },
    headerTitleStyle: { color: Colors.textHeader, fontSize: SF(18) },
    serviceContainer: { backgroundColor: Colors.themelight, width: '86%', alignSelf: 'center', borderRadius: 10 },
    serviceImageContainer: { 
        width: '100%', 
        height: SF(150), 
        borderRadius: 10, 
        overflow: 'hidden' 
    },
    serviceImage: { 
        width: '100%', 
        height: '100%' 
    },
    serviceInfoContainer: { flexDirection: 'row', justifyContent: 'space-between', margin: SW(15) },
    serviceDetails: { width: '63%' },
    serviceTitle: { 
        fontFamily: Fonts.SEMI_BOLD, 
        fontSize: SF(15), color: Colors.textAppColor 
    },
    serviceAddress: { 
        fontFamily: Fonts.MEDIUM, 
        fontSize: SF(10), 
        color: Colors.addressColor, 
        marginTop: 5 
    },
    serviceRatingContainer: { 
        width: '35%' 
    },
    ratingWrapper: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    starIcon: { 
        height: SF(16), 
        width: SF(16) 
    },
    ratingText: { 
        fontFamily: Fonts.REGULAR, 
        fontSize: SF(14.4), 
        color: '#9CA4AB', 
        marginTop: 5 
    },
    ratingValue: { 
        fontFamily: Fonts.SEMI_BOLD, 
        fontSize: SF(14.4), 
        color: Colors.ratingColor 
    },
    priceText: { 
        fontFamily: Fonts.REGULAR, 
        fontSize: SF(12), 
        color: Colors.addressColor, 
        marginTop: 5 
    },
    priceValue: { 
        fontFamily: Fonts.BOLD, 
        fontSize: SF(16.8), 
        color: '#171725' 
    },
    sectionTitle: { 
        fontFamily: Fonts.SEMI_BOLD, 
        fontSize: SW(14), 
        color: Colors.txtAppDarkColor 
    },
    aboutText: { 
        fontFamily: Fonts.REGULAR, 
        fontSize: SW(12), 
        color: Colors.textAppColor, 
        marginTop: SH(12), 
        marginLeft: SW(13) 
    },
    divider: { 
        marginTop: SH(12), 
        marginBottom: SH(20) 
    },
    operatingHoursRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15, 
        borderBottomWidth: 1, 
        borderBottomColor: '#3D3D3D1A', 
        paddingBottom: SH(15),
        marginTop:SH(7)
    },
    operatingHoursText: { 
        fontFamily: Fonts.MEDIUM, 
        fontSize: SW(14), 
        color: Colors.textAppColor, 
        marginTop: 10 
    },
    serviceOfferedContainer: { 
        borderBottomWidth: 1, 
        borderBottomColor: '#3D3D3D1A', 
        paddingBottom: SH(16), 
        paddingHorizontal: 15,
        marginTop:7
    },
    serviceOfferedRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    serviceOfferedText: { 
        fontFamily: Fonts.MEDIUM, 
        fontSize: SW(14), 
        color: Colors.textAppColor, 
        marginTop: 10 
    },
    servicePriceText: { 
        fontFamily: Fonts.REGULAR, 
        fontSize: SW(12), 
        color: Colors.textAppColor, 
        marginTop: 4 
    },
    reviewText: { 
        fontFamily: Fonts.MEDIUM, 
        fontSize: SF(11), 
        color: Colors.txtAppDarkColor, 
        marginTop: 7 
    },
    reviewUserNamee: { 
        fontFamily: Fonts.BOLD, 
        fontSize: SF(12), 
        color: Colors.txtAppDarkColor, 
        marginLeft: 7 
    },
    reviewUserImage: { 
        borderWidth: 1, 
        borderColor: '#5F5F5F', 
        height: SW(40), 
        width: SW(40), 
        borderRadius: SW(20) 
    },
    reviewUserCont: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginRight: 9 
    },
    reviewCard: { paddingHorizontal: SW(12), paddingVertical: SH(15), backgroundColor: Colors.themelight, width: SW(220), borderRadius: 10 },
    alignCenter: { flexDirection: 'row', alignItems: 'center' },
    userReviewHeading: { fontFamily: Fonts.BOLD, fontSize: SW(14), color: Colors.txtAppDarkColor },
    galleryColCont: { width: '48%' },
    galleryColImga: { height: SF(120), width: '100%', borderRadius: 10 },
    galleryBottomCont: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    galleryUpImage: { height: SF(208), width: '100%', borderRadius: 10 }
});

export default ServiceDetails;
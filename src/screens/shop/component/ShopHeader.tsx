import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, Pressable } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { HomeSearchBar, Inputs, VectoreIcons } from '../../../component';
import imagePaths from '../../../assets/images';
import { SearchBar } from 'react-native-screens';
import VectorIcon from '../../../component/VectoreIcons';
interface HeaderProps {
    onclickAdd?: (text: string) => void;
    onclicCalender?: (text: string) => void;
    onclicHeart?: (text: string) => void;
    onclicNotification?: (text: string) => void;
}

const ShopHeader: React.FC<HeaderProps> = ({
    onclickAdd = () => { },
    onclicCalender = () => { },
    onclicHeart = () => { },
    onclicNotification = () => { },
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
            colors={[Colors.themeDarkColor, Colors.themeColor]}>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal:25,
                    marginVertical:20
                }}
            >
                <TouchableOpacity
                    onPress={() => { }} // Call the passed onBackPress function
                    activeOpacity={0.5}
                    style={styles.backIconContainer}>
                    <VectorIcon
                        icon="FontAwesome"
                        color={Colors.white}
                        name="angle-left"
                        size={SW(35)}
                    />
                </TouchableOpacity>

                <View style={{ width: '70%', marginRight: 25 }}>
                    <Inputs
                        placeholder={'Search'}
                        containerStyle={{ padding: 0 }}
                        inputStyle={styles.inputStyle}
                        inputContainerStyle={styles.inputInnerContainer}
                        value=""
                        leftIcon={
                            <VectorIcon
                                color={Colors.searchBarPlac}
                                name="search1"
                                icon="AntDesign"
                                size={SF(20)}
                            />
                        }
                        placeholderTextColor={Colors.searchBarPlac}
                    />
                </View>
                <Pressable
                    style={styles.filterButton}
                >
                    <Image
                        source={imagePaths.filter_icon}
                        style={styles.filterIcon}
                    />
                </Pressable>
            </View>
        </LinearGradient>
    );
};
export default ShopHeader;
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    inputStyle: {
        color: Colors.searchBarPlac,
        fontFamily: Fonts.MEDIUM,
        marginLeft: Platform.OS == 'ios' ? 3 : 0,
        fontSize: SH(16),
    },
    inputInnerContainer: {
        backgroundColor: Colors.white,
        width: '100%',
        paddingHorizontal: SW(14),
        height: SH(46),
        padding: 0,
    },
    backIconContainer: {
        height: SH(40),
        zIndex: 99,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 30,
    },

    filterButton: {
        borderRadius: SW(10),
        justifyContent: 'center',
        alignItems: 'center',
        height: SH(40),
        width: SH(40),
        backgroundColor: Colors.white,
    },
    filterIcon: {
        height: SH(24),
        width: SH(24),
        resizeMode: 'contain',
        tintColor: Colors.themeColor
    },
});

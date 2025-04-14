import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, Pressable } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { HomeSearchBar, InputField, Inputs, VectoreIcons } from '../../../component';
import imagePaths from '../../../assets/images';
import { SearchBar } from 'react-native-screens';
import VectorIcon from '../../../component/VectoreIcons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
interface HeaderProps {
    onclickAdd?: (text: string) => void;
    onclicCalender?: (text: string) => void;
    onclicHeart?: (text: string) => void;
    onclicNotification?: (text: string) => void;
}

const ShopHeader: React.FC<HeaderProps> = ({
    // onclickAdd = () => { },
    // onclicCalender = () => { },
    // onclicHeart = () => { },
    // onclicNotification = () => { },
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[styles.container, { paddingTop: Platform.OS == 'android' ? getStatusBarHeight() : 0 }]}
            colors={[Colors.themeDarkColor, Colors.themeColor]}>
            <View style={styles.innerContainer}>
                <TouchableOpacity
                    onPress={() => { }} // Call the passed onBackPress function
                    activeOpacity={0.5}
                    style={styles.backIconContainer}>
                    <VectorIcon
                        icon="FontAwesome"
                        color={Colors.white}
                        name="angle-left"
                        size={SF(35)}
                    />
                </TouchableOpacity>
                <View style={{ width: '70%', marginRight: 25 }}>
                    <InputField
                        placeholder={'Search'}
                        inputContainer={{ backgroundColor: Colors.bgwhite, borderWidth: 0 }}
                        // containerStyle={styles.inputContainer}
                        inputStyle={styles.inputStyle}
                        placeholderTextColor={Colors.searchBarPlac}
                        leftIcon={imagePaths.Search}
                        color={Colors.searchBarPlac}
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
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        paddingBottom: SF(20)
    },
    inputStyle: {
        color: Colors.searchBarPlac,
        fontFamily: Fonts.MEDIUM,
        marginLeft: Platform.OS == 'ios' ? 3 : 0,
        fontSize: SF(16),
    },
    inputInnerContainer: {
        backgroundColor: Colors.white,
        width: '100%',
        paddingHorizontal: SW(14),
        height: SF(46),
        padding: 0,
    },
    backIconContainer: {
        height: SF(40),
        zIndex: 99,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 30,
    },

    filterButton: {
        borderRadius: SF(10),
        justifyContent: 'center',
        alignItems: 'center',
        height: SF(40),
        width: SF(40),
        backgroundColor: Colors.white,
    },
    filterIcon: {
        height: SF(24),
        width: SF(24),
        resizeMode: 'contain',
        tintColor: Colors.themeColor
    },
});

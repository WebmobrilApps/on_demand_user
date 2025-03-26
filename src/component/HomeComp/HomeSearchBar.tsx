import {
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import VectorIcon from '../VectoreIcons';
import imagePaths from '../../assets/images';
import Inputs from '../Input';

interface HomeSearchBarProps {
  onTextchange?: (text: string) => void;
  showFilterIcon?: boolean;
  bgColor?: string;
  pageName?: string
}

const HomeSearchBar: React.FC<HomeSearchBarProps> = ({
  onTextchange = () => { },
  showFilterIcon = true, // Default to true
  bgColor = Colors.lightGray,
  pageName = "NA"
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={{ width: showFilterIcon ? '86%' : '100%' }}>
        <Inputs
          placeholder={'Search'}
          containerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          inputContainerStyle={{ ...styles.inputInnerContainer, backgroundColor: bgColor }}
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

      {/* Render filter icon only if showFilterIcon is true */}
      {showFilterIcon && pageName == 'shop' ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.filterButton}
          colors={[Colors.themeDarkColor, Colors.themeColor]}
        >
          <Image
            source={imagePaths.filter_icon}
            style={styles.filterIcon}
          />
        </LinearGradient>
      )
        :
        <View
          style={[styles.filterButton, { backgroundColor: Colors.bgwhite, marginLeft: 15 }]}
        >
          <Image
            source={imagePaths.filter_icon}
            style={[styles.filterIcon, { tintColor: Colors.themeColor }]}
          />
        </View>
      }
    </View>
  );
};

export default HomeSearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '86%',
  },
  inputContainer: {
    backgroundColor: 'red',
    padding: 0,
  },
  inputStyle: {
    color: Colors.searchBarPlac,
    fontFamily: Fonts.MEDIUM,
    marginLeft: Platform.OS == 'ios' ? 3 : 0,
    fontSize: SH(16),
  },
  inputInnerContainer: {
    backgroundColor: Colors.lightGray,
    width: '100%',
    paddingHorizontal: SW(14),
    height: SH(45),
    padding: 0,
  },
  filterButton: {
    borderRadius: SW(10),
    justifyContent: 'center',
    alignItems: 'center',
    height: SH(38),
    width: SH(38),
  },
  filterIcon: {
    height: SH(22),
    width: SH(22),
    resizeMode: 'contain',
  },
});

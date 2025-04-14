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
import InputField from '../TextInputCustom';

interface HomeSearchBarProps {
  onTextchange?: (text: string) => void;
  showFilterIcon?: boolean;
  bgColor?: string;
  pageName?: string
}

const HomeSearchBar: React.FC<HomeSearchBarProps> = ({
  showFilterIcon = false, // Default to true
  bgColor = Colors.lightGray,
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={{ width: showFilterIcon ? '86%' : '100%' }}>
        <InputField
          placeholder={'Search'}
          inputContainer={{ backgroundColor: bgColor,borderWidth:0 }}
          containerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          placeholderTextColor={Colors.searchBarPlac}
          leftIcon={imagePaths.Search}
          color={Colors.searchBarPlac}
        />
      
      </View>

      {/* Render filter icon only if showFilterIcon is true */}
      {showFilterIcon &&
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
    padding: 0,
  },
  inputStyle: {
    color: Colors.searchBarPlac,
    fontFamily: Fonts.MEDIUM,
    marginLeft: Platform.OS == 'ios' ? 3 : 0,
    fontSize: SF(16),
  },
 
  filterButton: {
    borderRadius: SF(10),
    justifyContent: 'center',
    alignItems: 'center',
    height: SF(38),
    width: SF(38),
  },
  filterIcon: {
    height: SF(22),
    width: SF(22),
    resizeMode: 'contain',
  },
});

import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StatusBar,
  StatusBarStyle,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors, SH, SW} from '../utils';
import VectorIcon from './VectoreIcons';

type ContainerProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
  statusBarColor?: string;
  statusBarStyle?: StatusBarStyle;
  isAuth?: boolean;
  isBackButton?: boolean;
  onBackPress?: () => void; // Type-safe onBackPress function
};

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  statusBarColor, // Default status bar color
  statusBarStyle = 'dark-content', // Default status bar style
  isAuth = false,
  isBackButton = false,
  onBackPress = () => {}, // Default function to prevent undefined behavior
}) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar
        backgroundColor={statusBarColor || '#ffffff'}
        barStyle={statusBarStyle || 'light-content'}
      />
      {isBackButton && (
        <TouchableOpacity
          onPress={onBackPress} // Call the passed onBackPress function
          activeOpacity={0.5}
          style={styles.backIconContainer}>
          <VectorIcon
            icon="FontAwesome"
            color={Colors.textAppColor}
            name="angle-left"
            size={SW(35)}
          />
        </TouchableOpacity>
      )}
      <SafeAreaView
        style={{flex: 0, backgroundColor: statusBarColor || '#ffffff'}}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgwhite, // Default container background
  },
  backIconContainer: {
    width: SH(40),
    height: SH(40),
    zIndex: 99,
    position: 'absolute',
    left: SW(15),
    top: Platform.OS == 'android' ? SH(20) : SH(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Container;

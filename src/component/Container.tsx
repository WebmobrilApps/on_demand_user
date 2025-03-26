import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StatusBar,
  StatusBarStyle,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors, SH, SW} from '../utils';
import VectorIcon from './VectoreIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

type ContainerProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
  statusBarColor?: string;
  statusBarStyle?: StatusBarStyle;
  isAuth?: boolean;
  isBackButton?: boolean;
  onBackPress?: () => void; // Type-safe onBackPress function
  isPadding?:boolean
};

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  statusBarColor, // Default status bar color
  statusBarStyle = 'dark-content', // Default status bar style
  isBackButton = false,
  onBackPress = () => {}, // Default function to prevent undefined behavior
}) => {
  let statusbarColor = statusBarColor || '#ffffff'
  return (
    <View style={[styles.container, style]}>
      <StatusBar
        backgroundColor={statusbarColor}
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
      <SafeAreaView style={{flex:0,backgroundColor:statusbarColor}}/>
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
    marginTop: SH(20),
    marginLeft:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Container;

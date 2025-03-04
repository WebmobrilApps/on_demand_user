import React from 'react';
import { View, Platform, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, SH } from '../utils';

type AuthBottomContainerProps = {
  children?: React.ReactNode; // Children elements to render inside the container
  style?: ViewStyle; // Additional styles for the container
};

const AuthBottomContainer: React.FC<AuthBottomContainerProps> = ({
  children,
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
      ]}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.gradient]}
        colors={[
          Colors.themeDarkColor,
          Colors.themeColor,
        ]}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: SH(30),
    borderTopRightRadius: SH(30),
    flex:1,
    marginTop:SH(30)
  },
  gradient: {
    flex: 1,
    borderTopLeftRadius: SH(30),
    borderTopRightRadius: SH(30),
  },
});

export default AuthBottomContainer;

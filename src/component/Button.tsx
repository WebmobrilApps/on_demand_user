import React, {useMemo} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Fonts, SF, SH, SW, Colors} from '../utils';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { Button } from './Button/Button';

type ButtonsProps = {
  title?: string;
  onPress?: () => void;
  isLoading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  buttonTextStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
  spacedImages?: boolean;
  linearGradientProps?: object;
  textColor?: string;
};

const Buttons: React.FC<ButtonsProps> = ({
  title = '',
  onPress = () => {},
  isLoading = false,
  buttonStyle = {},
  disable = false,
  buttonTextStyle = {},
  icon,
  spacedImages = false,
  linearGradientProps,
  textColor = '#ffffff',
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: Colors.themeColor,
          borderRadius: SW(10),
          height: SH(48),
          width: '100%',
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity:  0.17,
          shadowRadius: 2.54,
          elevation: 3
        },
        buttonTextStyle: {
          color: textColor || Colors.textWhite,
          fontFamily: Fonts.MEDIUM,
          fontSize: SF(18),
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%',
        },
        LeftImageViewStyle: {
          marginVertical: SW(5),
        },
      }),
    [disable, spacedImages, textColor],
  );

  return (
    // <HideWithKeyboard>
      <Button
        title={title}
        onPress={onPress}
        disabled={disable}
        loading={isLoading}
        // icon={icon && icon}
        loadingProps={{color: textColor || Colors.themeColor}}
        linearGradientProps={linearGradientProps}
        buttonStyle={[styles.buttonStyle, buttonStyle]}
        titleStyle={[styles.buttonTextStyle, buttonTextStyle]}
      />
    // </HideWithKeyboard>
  );
};

export default Buttons;

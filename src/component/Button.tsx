import React, { useMemo } from "react";
import {
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
} from "react-native";
import { Fonts, SF, SH, SW, Colors, boxShadow } from "../utils";

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
  title = "",
  onPress = () => { },
  isLoading = false,
  buttonStyle = {},
  disable = false,
  buttonTextStyle = {},
  icon,
  spacedImages = false,
  linearGradientProps,
  textColor = "#ffffff",
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: disable ? "#A9A9A9" : Colors.themeColor,
          height: SH(48),
          width: "100%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        },
        buttonTextStyle: {
          color: textColor || Colors.textWhite,
          fontFamily: Fonts.MEDIUM,
          fontSize: SF(16),
        },
        buttonViewStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: spacedImages ? "space-around" : "center",
          width: "100%",
        },
        LeftImageViewStyle: {
          marginVertical: SW(5),
        },
      }),
    [disable, spacedImages, textColor]
  );

  return (
    <Pressable
      onPress={!disable && !isLoading ? onPress : undefined}
      style={({ pressed }) => [
        styles.buttonStyle,boxShadow,
        buttonStyle,
        pressed && { opacity: 0.8 }, // Slight fade effect when pressed
      ]}
      disabled={disable}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={textColor || Colors.themeColor} />
      ) : (
        <View style={styles.buttonViewStyle}>
          {icon && <View style={styles.LeftImageViewStyle}>{icon}</View>}
          <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default Buttons;

import React, { useMemo } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    Platform,
    TextStyle,
    ViewStyle,
    TextInputProps,
    Image,
    ImageSourcePropType,
    DimensionValue
} from "react-native";
import { Colors, Fonts, SF, SH, SW } from "../utils";

interface InputFieldProps extends TextInputProps {
    label?: string;
    errorMessage?: string;
    leftIcon?: ImageSourcePropType;
    rightIcon?: ImageSourcePropType;
    onRightIconPress?: () => void;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    errorStyle?: TextStyle;
    isDisabled?: boolean;
    textColor?: string;
    color?: string;
    marginBottom?: DimensionValue,
    marginTop?: DimensionValue,
}

const InputField: React.FC<InputFieldProps> = ({
    label = "",
    placeholder = "",
    value = "",
    onChangeText,
    onBlur,
    onFocus,
    keyboardType = "default",
    secureTextEntry = false,
    errorMessage = "",
    leftIcon,
    rightIcon,
    onRightIconPress,
    containerStyle = {},
    inputStyle = {},
    errorStyle = {},
    multiline = false,
    maxLength,
    isDisabled = false,
    autoFocus = false,
    placeholderTextColor = Colors.white,
    textColor = Colors.white,
    color = Colors.white,
    marginBottom = SH(5),
    marginTop = SH(5),
    ...props
}) => {
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    width: "100%",
                    marginVertical: 5,
                    marginBottom,
                    marginTop,
                    ...containerStyle,
                },
                label: {
                    fontSize: 14,
                    fontWeight: "bold",
                    marginBottom: 5,
                    color: color,
                },
                inputContainer: {
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    // borderColor: errorMessage ? "red" : color,
                    borderColor: color,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: SH(3.6),
                    backgroundColor: isDisabled ? "#f2f2f2" : "transparent",
                },
                input: {
                    flex: 1,
                    paddingVertical: Platform.OS === "ios" ? 10 : 8,
                    color: textColor,
                    fontSize: SF(14.5),
                    paddingLeft: SW(10),
                    fontFamily: Fonts.REGULAR,
                    ...inputStyle,
                },
                errorText: {
                    marginTop: 3,
                    color: Colors.red,
                    fontSize: SF(12),
                    fontFamily: Fonts.REGULAR,
                    paddingLeft: SW(4),
                    ...errorStyle,
                },
            }),
        [containerStyle, inputStyle, errorStyle, errorMessage]
    );

    return (
        <View style={styles.container}>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <View style={styles.inputContainer}>
                {leftIcon && <View style={{ paddingHorizontal: SF(2) }}>
                    <Image
                        source={leftIcon}
                        style={{ width: SH(20), height: SH(20), tintColor: color }}
                        resizeMode="contain"
                    />
                </View>}
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoFocus={autoFocus}
                    multiline={multiline}
                    maxLength={maxLength}
                    value={value}
                    editable={!isDisabled}
                    {...props}
                />
                {rightIcon && (
                    <TouchableOpacity onPress={onRightIconPress}>
                        <Image
                            source={rightIcon}
                            style={{ width: SH(20), height: SH(20), tintColor: color }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
    );
};

export default InputField;

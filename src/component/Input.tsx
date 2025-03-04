import React, {useMemo} from 'react';
import {View, StyleSheet, TextStyle, ViewStyle, Platform} from 'react-native';
import {SF, SH, SW, Fonts, Colors} from '../utils';
import { Input } from './Input/Input';

interface InputsProps {
  title?: string;
  placeholder?: string;
  titleStyle?: TextStyle;
  inputStyle?: TextStyle;
  onChangeText?: (text: string) => void;
  value?: string;
  inputprops?: any;
  onBlur?: () => void;
  onFocus?: () => void;
  inputType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  leftIcon?: object;
  rightIcon?: object;
  errorMessage?: string;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  label?: string;
  errorStyle?: TextStyle;
  disabledInputStyle?: ViewStyle;
  onEndEditing?: (e: any) => void;
  renderErrorMessage?: boolean;
  multiline?: boolean;
  maxLength?: number;
  isDisabled?: boolean;
  onBlured?: () => void;
  placeholderTextColor?: string;
}

const Inputs: React.FC<InputsProps> = ({
  title = '',
  placeholder = '',
  titleStyle = {},
  inputStyle = {},
  onChangeText = () => {},
  value = '',
  inputprops = {},
  onBlur = () => {},
  onFocus = () => {},
  inputType = null,
  autoFocus = false,
  secureTextEntry = false,
  leftIcon = {},
  rightIcon = {},
  errorMessage = '',
  containerStyle = {},
  inputContainerStyle = {},
  label = '',
  errorStyle = {},
  disabledInputStyle = {},
  onEndEditing = () => {},
  renderErrorMessage = false,
  multiline = false,
  maxLength,
  isDisabled = false,
  onBlured = () => {},
  placeholderTextColor = Colors.placeHolderColor,
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: Colors.bgwhite,
          width: '100%',
          marginHorizontal: SH(0),
          borderRadius: SW(10),
          ...containerStyle,
        },
        inputContainerStyle: {
          borderRadius: SW(10),
          height: SH(50),
          justifyContent: 'center',
          marginHorizontal: SH(0),
          borderWidth: 1,
          borderColor: Colors.white,
          backgroundColor: 'transparent',
          ...inputContainerStyle,
        },
        inputStyle: {
          fontSize: SF(14.5),
          fontFamily: Fonts.REGULAR,
          height: SH(44),
          color: Colors.black,
          borderRadius: SH(10),
          textAlignVertical: 'top',
          ...inputStyle,
        },
        errorStyle: {
          color: Colors.red,
          fontSize: SF(12),
          fontFamily: Fonts.REGULAR,
          paddingLeft: SW(4),
          margin: 0,
          marginTop: errorMessage === '' ? 0 : 5,
          ...errorStyle,
        },
        disabledInputStyle: {
          backgroundColor: Colors.bgwhite,
          color: 'red',
          ...disabledInputStyle,
        },
      }),
    [
      titleStyle,
      containerStyle,
      inputContainerStyle,
      inputStyle,
      errorStyle,
      Colors,
      errorMessage
    ],
  );

  return (
    <View>
      <Input
        disabledInputStyle={styles.disabledInputStyle}
        inputContainerStyle={styles.inputContainerStyle}
        errorMessage={errorMessage}
        errorStyle={styles.errorStyle}
        errorProps={{}}
        disabled={isDisabled}
        inputStyle={styles.inputStyle}
        label={label}
        labelStyle={{marginBottom: SH(10),color:Colors.textAppColor,fontSize:SF(14),fontFamily:Fonts.REGULAR,marginLeft:3}}
        labelProps={{}}
        leftIcon={leftIcon}
        placeholderTextColor={placeholderTextColor}
        leftIconContainerStyle={{marginTop:Platform.OS=='ios'?0:0}}
        rightIcon={rightIcon}
        rightIconContainerStyle={{marginTop:Platform.OS=='ios'?0:0}}
        placeholder={placeholder}
        renderErrorMessage={renderErrorMessage}
        onEndEditing={e => onEndEditing(e)}
        onChangeText={text => onChangeText(text)}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        autoFocus={autoFocus}
        keyboardType={!inputType ? 'default' : inputType}
        secureTextEntry={secureTextEntry}
        value={value}
        multiline={multiline}
        maxLength={maxLength}
        {...inputprops}
      />
    </View>
  );
};

export default Inputs;

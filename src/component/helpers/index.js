var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Platform, Dimensions } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType, { registerCustomIconType } from './getIconType';
import normalizeText from './normalizeText';
import { lightColors, darkColors } from './colors';
const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';
const getBehaviorType = Platform.OS === 'ios' ? 'padding' : 'height';
export const defaultSpacing = { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 };
export const defaultTheme = {
    colors: lightColors,
    spacing: defaultSpacing,
};
export const androidRipple = (rippleColor) => {
    return {
        borderless: false,
        color: rippleColor,
        radius: -5,
    };
};
export const patchWebProps = (_a) => {
    var { updateTheme, replaceTheme, onClear } = _a, rest = __rest(_a, ["updateTheme", "replaceTheme", "onClear"]);
    return rest;
};
export { renderNode, getIconType, normalizeText, ScreenWidth, ScreenHeight, isIOS, lightColors, darkColors, color, getBehaviorType, registerCustomIconType, };
export { default as BackgroundImage } from './BackgroundImage';
export { default as fonts } from './fonts';
export { makeStyles } from './makeStyles';

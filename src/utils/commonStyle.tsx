import { ViewStyle } from "react-native";


import { StyleSheet } from 'react-native';
import COLORS from './colors';
import FONTS from './fonts';

export const commonStyles = StyleSheet.create({
  rowSpaceBetweenCss: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
});

export const boxShadow = {
  boxShadow: [
    {
      offsetX: 0,
      offsetY: 7,
      blurRadius: '20',
      spreadDistance: '0',
      color: `rgba(0, 0, 0, 0.2)`,
    },
  ],
}

export const centerCss = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: 'center'
}
export const rowSpaceBetweenCss = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: "space-between",
}
export const rowFlexStartCss = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: 'center'
}
export const rowFlexEndCss = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: 'center'
}


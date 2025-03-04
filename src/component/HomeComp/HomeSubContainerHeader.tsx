import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Colors, Fonts, SF, SW } from '../../utils';

interface HomeSubContainerHeaderProps {
  onClick?: (text: string) => void;
  leftText: string;
  rightText: string;
}

const HomeSubContainerHeader: React.FC<HomeSubContainerHeaderProps> = ({
  leftText,
  rightText,
  onClick = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{leftText}</Text>
      <TouchableOpacity style={styles.rightTextContainer} onPress={() => onClick(rightText)}>
        <Text style={styles.rightText}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSubContainerHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SW(20),
  },
  leftText: {
    width: '70%',
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(15),
    color: Colors.textAppColor,
  },
  rightTextContainer: {
    width: '30%',
    alignItems: 'flex-end',
  },
  rightText: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(15),
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: Colors.themeDarkColor,
  },
});

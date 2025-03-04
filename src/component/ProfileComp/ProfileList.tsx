import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts, SF, SH, SW} from '../../utils';
import imagePaths from '../../assets/images';

type ProfileListProps = {
  item: {
    name: string;
    id: number;
    onClick?: () => void;
  };
};

const ProfileList: React.FC<ProfileListProps> = ({item}) => {
  return (
    <TouchableOpacity onPress={item.onClick} style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Image
        source={imagePaths.right_icon}
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.themelight,
    height: SH(45),
    justifyContent: 'space-between',
    paddingRight: SW(15),
    paddingLeft: SW(25),
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(15),
    color: Colors.textAppColor,
  },
  icon: {
    height: SH(18),
    width: SH(18),
  },
});

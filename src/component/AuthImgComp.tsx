import React from 'react';
import {
  View,
  Image,
  ImageProps,
} from 'react-native';
import {SF,  SH,  SW} from '../utils';
import imagePaths from '../assets/images';

type AuthImgCompProps = {
  icon: ImageProps;
};

const AuthImgComp: React.FC<AuthImgCompProps> = ({icon}) => {
  return (
    <View style={{paddingHorizontal: SF(10)}}>
     <Image
        source={icon}
        style={{
          height: SF(200),
          width: SF(200),
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default AuthImgComp;

import React from 'react';
import {NavigatinScreens} from './NavigatinScreens';
import {View} from 'react-native';
import {NoInternet} from '../component';
import FlashMessage from 'react-native-flash-message';
const AppRoute = () => {
  return (
    <View style={{flex: 1}}>
      <FlashMessage />
      <NavigatinScreens />
      <NoInternet />
    </View>
  );
};

export default AppRoute;

import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HomeProps = {};

const HomeScreen: React.FC<HomeProps> = ({}) => {
  return <View style={{justifyContent:"center",alignItems:'center',flex:1,backgroundColor:'#ffffff'}}>
    <Text>Message</Text>
  </View>;
};

export default HomeScreen;
const styles = StyleSheet.create({});

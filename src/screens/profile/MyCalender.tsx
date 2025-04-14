import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {
  AppHeader,
  Container,
  MyCalenderItems,
  Spacing,
} from '../../component';
import { Colors, SH, SW } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


type MyCalenderProps = {};
const spaceContainer = () => <Spacing space={SH(15)} />;
const MyCalender: React.FC<MyCalenderProps> = ({ }) => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const calenderData = [
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 1,
    },
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 2,
    },
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 3,
    },
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 6,
    },
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 7,
    },
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 8,
    },
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 9,
    },
    {
      name: 'Facial For Glow',
      datetime: '10, Feb 2025 , 09:00pm',
      id: 10,
    },
  ];
  return (
    <Container isAuth={false}>
      <AppHeader
        headerTitle={t('profile.myCalendar')}
        onPress={() => {
          navigation.goBack();
        }}
        Iconname="arrowleft"
        rightOnPress={() => { }}
        headerStyle={styles.header}
      />

      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SH(90) }}
          data={calenderData}
          ItemSeparatorComponent={spaceContainer}
          renderItem={({ item }) => <MyCalenderItems item={item} />}
          keyExtractor={(item, index) => item.name + index}
          removeClippedSubviews={false}
        />
      </View>
    </Container>
  );
};

export default MyCalender;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(25),
  },
  separator: {
    height: SH(15),
  },
  container: {
    paddingHorizontal: SW(25),
    paddingTop: SH(20),
    // paddingBottom:SH(89)
  },
});

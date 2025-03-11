import React  from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MessageScreen, MyBookingScreen, ProfileScreen} from '../screens/tab';
import imagePaths from '../assets/images';
import {Colors, Fonts, SCREEN_WIDTH, SF, SH, widthPercent} from '../utils';
import RouteName from './RouteName';
import AllUsersList from '../screens/AllUsersList';
import { HomeScreen } from '../screens';

const BOTTOM_ROUTE = [
  {
    name: RouteName.HOME,
    Component: () => <HomeScreen />, // Replace with your actual component
    icon: imagePaths.home_tab, // Replace with your icon
    headerShown: false,
  },
  {
    name: RouteName.MY_BOOKING,
    Component: () => <MyBookingScreen />, // Replace with your actual component
    icon: imagePaths.mybooking_tab, // Replace with your icon
    headerShown: true,
  },
  // {
  //   name: RouteName.MESSAGE,
  //   Component: () => <MessageScreen />, // Replace with your actual component
  //   icon: imagePaths.message_tab, // Replace with your icon
  //   headerShown: true,
  // },
    {
    name: 'AllUsersList',
    Component: () => <AllUsersList />, // Replace with your actual component
    icon: imagePaths.message_tab, // Replace with your icon
    headerShown: true,
  },
  {
    name: RouteName.PROFILE,
    Component: () => <ProfileScreen />, // Replace with your actual component
    icon: imagePaths.profile_tab, // Replace with your icon
    headerShown: false,
  },
];

const Tab = createBottomTabNavigator();

// Define styles
const styles = StyleSheet.create({
  tabBarBackgroundImage: {
    width: '100%',
    height: 70, // Adjust the height as needed
  },
  imageStyle: {
    width: SF(24),
    height: SF(24),
  },
  iconsstyles: {
    fontFamily: Fonts.PlusJakartaSans_SEMI_BOLD,
    fontWeight: '500',
    fontSize: SF(12),
  },
});

// Main Component
export default function App() {
  // const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     () => setIsKeyboardVisible(true),
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => setIsKeyboardVisible(false),
  //   );

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  return (
    <Tab.Navigator
      initialRouteName={RouteName.HOME}
      // initialRouteName={'AllUsersList'}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.themeColor,
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: Colors.white},
        headerTitleStyle: {
          color: Colors.textAppColor,
          fontFamily: Fonts.PlusJakartaSans_SEMI_BOLD,
          fontSize: 15,
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height:SH(60),
          paddingTop:SH(8)
        },
      }}>
      {BOTTOM_ROUTE.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.Component}
          options={{
            headerShown: route.headerShown,
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <View style={{width:SCREEN_WIDTH/4.2,justifyContent:"center",alignItems:"center"}}>
                <Image
                  style={[
                    styles.imageStyle,
                    {
                      tintColor: focused
                        ? Colors.themeColor
                        : Colors.textAppColor,
                    },
                  ]}
                  source={route.icon}
                />
                <Text
                  style={[
                    styles.iconsstyles,
                    {color: focused ? Colors.themeColor : Colors.textAppColor},
                  ]}>
                  {route.name}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

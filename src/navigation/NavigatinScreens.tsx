//@ts-nocheck
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {
  ForgotScreen,
  LoginScreen,
  OtpVerifyScreen,
  PasswordUpdateScreen,
  PrivacyPolicy,
  SignupScreen,
} from '../screens/auth';
import Bottomtab from './BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  BookAppointment,
  BookingDetails,
  BookingPrivacyPolicy,
  ChangePassword,
  FilterScreen,
  LanguageAndCurrency,
  MyCalender,
  NotificationAndAlert,
  PaymentHistory,
  ProfileSetup,
  RatingRiview,
  ReportShop,
  ServiceDetails,
  ServiceList,
  ShopDetails,
  ShopList,
  SplashScreen,
  ViewAll,
} from '../screens';

import AllUsersList from '../screens/AllUsersList';
import ChatScreen from '../screens/ChatScreen';
import { navigationRef } from '../services/NavigationService';

const Stack = createNativeStackNavigator();

export const NavigatinScreens = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={RouteName.HOME} component={Bottomtab} />
        <Stack.Screen name={'SplashScreen'}  component={SplashScreen} />
        <Stack.Screen name={RouteName.SHOP_LIST} component={ShopList} />
        <Stack.Screen name={RouteName.SHOP_DETAILS} component={ShopDetails} />
        {/* auth-====== */}
        <Stack.Screen name={RouteName.LOGIN} component={LoginScreen} />
        <Stack.Screen name={RouteName.SIGNUP} component={SignupScreen} />
        {/* learning--------- */}
        <Stack.Screen name={'AllUsersList'}  component={AllUsersList} />
        <Stack.Screen name={'ChatScreen'}  component={ChatScreen} />
        {/* profile--------- */}
        <Stack.Screen name={RouteName.PROFILE_SETUP} options={{headerShown:false}} component={ProfileSetup} />
        <Stack.Screen name={RouteName.CHANGE_PASSWORD} component={ChangePassword} />


        <Stack.Screen name={RouteName.VIEW_ALL} component={ViewAll} />
        <Stack.Screen name={RouteName.PRIVACY_POLICY} component={PrivacyPolicy} />
        <Stack.Screen name={RouteName.PASS_UPDATE} component={PasswordUpdateScreen} />

        <Stack.Screen name={RouteName.FORGOT_PASS} component={ForgotScreen} />
        <Stack.Screen name={RouteName.SERVICE_LIST} component={ServiceList} />
        <Stack.Screen name={RouteName.SERVICE_DETAILS} component={ServiceDetails} />
        <Stack.Screen name={RouteName.OTP_VERIFY} component={OtpVerifyScreen} />
        <Stack.Screen name={RouteName.MY_CALENDER} component={MyCalender} />
        <Stack.Screen name={RouteName.PAYMENT_HISTORY} component={PaymentHistory} />
        <Stack.Screen name={RouteName.RATING_REVIEW} component={RatingRiview} />
        <Stack.Screen name={RouteName.NOTIFICATION_ALERT} component={NotificationAndAlert} />
        <Stack.Screen name={RouteName.LANG_CURRENCY} component={LanguageAndCurrency} />
        <Stack.Screen name={RouteName.BOOKING_PRI_POLI} component={BookingPrivacyPolicy} />
        <Stack.Screen name={RouteName.REPORT_SHOP} component={ReportShop} />
        <Stack.Screen name={RouteName.BOOK_APPOINT} component={BookAppointment} />
        <Stack.Screen name={RouteName.BOOK_DETAILS} component={BookingDetails} />
        <Stack.Screen name={RouteName.FILTER_SCREEN} component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

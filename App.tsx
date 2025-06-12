import React, { useEffect } from 'react';

import { I18nManager, StyleSheet, Text, View,TextInput } from 'react-native';
import AppRoute from './src/navigation/AppRoute';
import './src/services/langauage/i18n';
import { ChatProvider } from './src/screens/ChatProvider';
import { notificationListener, requestUserPermission } from './src/services';
import { Provider } from 'react-redux';
import { store } from './src/redux';
 
const App = () => {

  useEffect(() => {
    // if (I18nManager.isRTL) {
    //   I18nManager.allowRTL(true);
    //   I18nManager.forceRTL(true);
    //   // Restart required — see below
    // }
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <Provider store={store}>
      <ChatProvider>
        <View style={styles.safeArea}>
          <AppRoute />
        </View>
      </ChatProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;

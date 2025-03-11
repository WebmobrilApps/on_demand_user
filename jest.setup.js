// jest.setup.js

// Mock @react-native-firebase/app
jest.mock("@react-native-firebase/app", () => ({
    initializeApp: jest.fn(),
  }));
  
  // Mock @react-native-firebase/messaging
  jest.mock("@react-native-firebase/messaging", () => ({
    onMessage: jest.fn(() => jest.fn()),
    setBackgroundMessageHandler: jest.fn(),
    getToken: jest.fn(() => Promise.resolve("mock-token")),
    requestPermission: jest.fn(() => Promise.resolve(true)),
    hasPermission: jest.fn(() => Promise.resolve(true)),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
  }));
  
  // Mock @react-native-community/netinfo
  jest.mock("@react-native-community/netinfo", () => ({
    addEventListener: jest.fn(),
    fetch: jest.fn(() =>
      Promise.resolve({
        isConnected: true,
        isInternetReachable: true,
      })
    ),
  }));
  
  // Mock react-native-responsive-screen (if needed)
  jest.mock("react-native-responsive-screen", () => ({
    heightPercentageToDP: jest.fn(() => 50),
    widthPercentageToDP: jest.fn(() => 50),
  }));
  
  // Add any other mocks as needed
  

  jest.mock("@react-native-async-storage/async-storage", () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)), // Default to returning null
    removeItem: jest.fn(() => Promise.resolve()),
    clear: jest.fn(() => Promise.resolve()),
  }));

 
// Mock @notifee/react-native
jest.mock("@notifee/react-native", () => ({
    requestPermission: jest.fn(() => Promise.resolve(true)),
    getInitialNotification: jest.fn(() => Promise.resolve(null)),
    onForegroundEvent: jest.fn(),
    onBackgroundEvent: jest.fn(),
    displayNotification: jest.fn(() => Promise.resolve()),
    cancelNotification: jest.fn(() => Promise.resolve()),
    createChannel: jest.fn(() => Promise.resolve()),
    deleteChannel: jest.fn(() => Promise.resolve()),
    setBadgeCount: jest.fn(() => Promise.resolve()),
    getBadgeCount: jest.fn(() => Promise.resolve(0)),
  }));
 
 

jest.mock('@react-native-firebase/database', () => {
    return () => ({
      ref: jest.fn(() => ({
        set: jest.fn(() => Promise.resolve()),
        update: jest.fn(() => Promise.resolve()),
        remove: jest.fn(() => Promise.resolve()),
        once: jest.fn(() => Promise.resolve({ val: () => ({}) })), // Mock return value for once()
        on: jest.fn((event, callback) => callback({ val: () => ({}) })), // Simulating real-time updates
        off: jest.fn(),
      })),
    });
  });
  

  // jest.setup.js

jest.mock('react-native-device-info', () => ({
    getUniqueId: jest.fn(() => 'mocked-device-id'),
    getSystemName: jest.fn(() => 'mocked-system-name'),
    getSystemVersion: jest.fn(() => 'mocked-system-version'),
    getVersion: jest.fn(() => 'mocked-app-version'),
    getBuildNumber: jest.fn(() => 'mocked-build-number'),
    getDeviceName: jest.fn(() => Promise.resolve('mocked-device-name')),
    getManufacturer: jest.fn(() => Promise.resolve('mocked-manufacturer')),
    hasNotch: jest.fn(() => false),
  }));
  

jest.mock('react-native-gifted-chat', () => {
    const React = require('react');
    return {
      GiftedChat: jest.fn(({ messages, onSend }) => {
        return React.createElement('GiftedChat', {
          messages,
          onSend,
        });
      }),
    };
  });
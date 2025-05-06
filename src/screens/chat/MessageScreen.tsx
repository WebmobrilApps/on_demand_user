import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useCallback, useEffect, useContext } from 'react';
import {
  Actions,
  Bubble,
  Composer,
  GiftedChat,
  IMessage,
  InputToolbar,
  Send,
} from 'react-native-gifted-chat';
 
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VectoreIcons } from '../../component';
 
const messages = [
  {
    _id: 1,
    text: 'Hello! How can I help you today?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Support',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    _id: 2,
    text: 'Hi, I need some assistance with my order.',
    createdAt: new Date(Date.now() - 60 * 1000),
    user: {
      _id: 1,
      name: 'You',
    },
  },
  {
    _id: 3,
    text: 'Sure, I’d be happy to help. Could you provide your order number?',
    createdAt: new Date(Date.now() - 2 * 60 * 1000),
    user: {
      _id: 2,
      name: 'Support',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
];


const CustomHeader = ( ) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{'title'}</Text>
    </View>
  );
};


export default function ChatScreen() {
  const route = useRoute<any>();
  let { otherDetails, myDetails } = route?.params;
  console.log('myDetails-', myDetails, 'otherDetails-', otherDetails);
 
 
   
  const navigation = useNavigation();
  
  useEffect(() => {
 
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    
  }, []);

  const renderCustomBubble = (props: any) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: styles.rightBubble,
        left: styles.leftBubble,
      }}
      textStyle={{
        right: styles.rightBubbleText,
        left: styles.leftBubbleText,
      }}
    />
  );

  const renderActions = (props: any) => (
    <Actions
      {...props}
      icon={() => (
        <VectoreIcons icon="Ionicons" name="camera" size={18} color="#ffffff" />
      )}
      iconTextStyle={{ alignSelf: 'center' }}
      containerStyle={styles.actionsContainer}
      onPressActionButton={() => {
        console.log('Open Image Picker');
      }}
    />
  );
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);
  return (
    <GiftedChat
      messages={messages}
      renderBubble={renderCustomBubble}
      onSend={messages => {
        onSend(messages);
      }}
      user={{ _id: myDetails?.userId }}
      renderActions={renderActions}
      // onLoadEarlier={() => {
      //   if (messages.length >= 25) {
      //     const oldestMessageTimestamp =
      //       messages[messages.length - 1].createdAt; // Get first message's timestamp
      //     fetchMessages(
      //       `${myDetails?.userId}_${otherDetails?.userId}`,
      //       oldestMessageTimestamp,
      //     );
      //   }
      // }}
      // isLoadingEarlier={false}
      // infiniteScroll={true}
      // loadEarlier={true}
      messagesContainerStyle={{ paddingBottom: 17 }}
      renderSend={props => (
        <Send {...props} containerStyle={styles.sendContainer}>
          <VectoreIcons icon="Ionicons" name="send" size={30} color="#1f2c34" />
        </Send>
      )}
      renderComposer={props => (
        <Composer {...props} textInputStyle={styles.composerText} />
      )}
      renderInputToolbar={props => (
        <InputToolbar
          {...props}
          primaryStyle={{ alignItems: 'center' }}
          containerStyle={styles.inputToolbar}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  rightBubble: {
    backgroundColor: '#D9D9D9',
  },
  leftBubble: {
    backgroundColor: '#0078FF',
  },
  rightBubbleText: {
    color: '#000000',
  },
  leftBubbleText: {
    color: '#fff',
  },
  actionsContainer: {
    backgroundColor: '#696969',
    borderRadius: 12.5,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  inputToolbar: {
    backgroundColor: '#1f2c34',
    borderRadius: 30,
    marginBottom: 5,
    width: '75%',
    marginLeft: '7%',
  },
  sendContainer: {
    width: 50,
    position: 'absolute',
    right: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerText: {
    color: '#ffffff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  backText: {
    color: '#6200ee',
    fontSize: 25,
  },
  headerTitle: {
    color: '#6200ee',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

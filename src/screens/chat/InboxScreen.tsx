import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Container, Divider, ImageLoader, VectoreIcons } from '../../component';
import { boxShadow, inboxData, Colors, Fonts, imagePaths, SF, SH, SW, inboxMenuData } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import ChatDropdownMenu from './component/ChatDropdownMenu';


const { width } = Dimensions.get('window');

const InboxScreen = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const navigation = useNavigation<any>();

 

  const closeMenu = () => setSelectedMenu(null);

  const renderItem = ({ item }: { item: typeof inboxData[0] }) => (
    <View style={styles.itemRow}>
      <TouchableOpacity style={styles.itemRow1} onPress={() => {
        navigation.navigate(RouteName.MESSAGE_SCREEN);
      }}>
        <View style={styles.avatarContainer}>
          <ImageLoader source={{ uri: item.avatar }} mainImageStyle={styles.avatar} />
        </View>
        <View style={{alignItems:"flex-start"}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          <Text style={styles.time}><VectoreIcons icon='MaterialCommunityIcons' name="clock-outline" size={SF(12)} color="#787878" /> {item.time}</Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop:SH(10)}}>
        <TouchableOpacity onPress={() => setSelectedMenu(item.id)}>
          <VectoreIcons icon='MaterialCommunityIcons' name="dots-vertical" size={SF(26)} color={Colors.themeColor} />
        </TouchableOpacity>
        {selectedMenu === item.id && <ChatDropdownMenu menuOptions={inboxMenuData} onClose={closeMenu} />}
      </View>
    </View>
  );
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.headerRow}>
 
          <Text style={styles.header}>Chat</Text>
        </View>

        <FlatList
          data={inboxData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          extraData={selectedMenu}
        />
        {selectedMenu && (
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={closeMenu}
          />
        )}
      </View>
    </Container>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: SF(15),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SF(16),
  },
  searchIcon: {
    height: SF(30),
    width: SF(30),
  },
  header: {
    fontSize: SF(16),
    textAlign: 'center',
    fontFamily: Fonts.SEMI_BOLD,
    marginVertical: SH(15),
    marginLeft: SW(18)
  },
  itemRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    position: 'relative',
    padding: 14,
    justifyContent:'space-between'
  },
  itemRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  avatarContainer: {
    height: SF(60),
    width: SF(60),
    borderRadius: SF(30),
    overflow: 'hidden',
    marginRight: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  messageInfo: {
    flex: 1,
  },
  name: {
    fontSize: SF(14),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
  },
  lastMessage: {
    fontSize: SF(10),
    color: Colors.textAppColor,
    fontFamily: Fonts.REGULAR,
    marginTop: 2,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  time: {
    fontSize: SF(10),
    color: '#787878',
    marginTop:2
  },
  dropdown: {
    position: 'absolute',
    top: SH(25),
    right: SW(5),
    backgroundColor: '#fff',
    borderRadius: SF(6),
    paddingVertical: 6,
    width: SW(110),
    zIndex: 999,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SF(20),
    paddingVertical: SF(12),
  },
  menuIcon: {
    height: SF(10),
    width: SF(10),
  },
  menuText: {
    fontSize: SF(8),
    marginLeft: SF(8),
    color: '#000',
    fontFamily: Fonts.Chivo_Medium,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height: '100%',
    zIndex: 10,
    backgroundColor: ''
  },
});

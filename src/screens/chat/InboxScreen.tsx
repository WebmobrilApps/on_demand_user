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
import { Divider, ImageLoader, VectoreIcons } from '../../component';
import { boxShadow, inboxData, Colors, Fonts, imagePaths, SF, SH, SW } from '../../utils';


const { width } = Dimensions.get('window');

const InboxScreen = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const renderMenu = (id: string) => {
    if (selectedMenu !== id) return null;
    return (
      <View style={[styles.dropdown, boxShadow]}>
        <TouchableOpacity style={styles.menuItem} onPress={closeMenu}>
          <Image source={imagePaths.delete_icon} style={styles.menuIcon} />
          <Text style={styles.menuText}>Delete Chat</Text>
        </TouchableOpacity>
        <Divider color={'#DEDEDE'} />
        <TouchableOpacity style={styles.menuItem} onPress={closeMenu}>
          <Image source={imagePaths.report_icon} style={styles.menuIcon} />
          <Text style={styles.menuText}>Report</Text>
        </TouchableOpacity>
        <Divider color={'#DEDEDE'} />
        <TouchableOpacity style={styles.menuItem} onPress={closeMenu}>
          <Image source={imagePaths.block_icon} style={styles.menuIcon} />
          <Text style={styles.menuText}>Block</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const closeMenu = () => setSelectedMenu(null);

  const renderItem = ({ item }: { item: typeof inboxData[0] }) => (
    <View style={styles.itemRow}>
      <View style={styles.avatarContainer}>
        <ImageLoader source={{ uri: item.avatar }} mainImageStyle={styles.avatar} />
      </View>
      <View style={styles.messageInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        <View style={styles.timeRow}>
          <VectoreIcons icon='MaterialCommunityIcons' name="clock-outline" size={SF(12)} color="#787878" />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => setSelectedMenu(item.id)}>
          <VectoreIcons icon='MaterialCommunityIcons' name="dots-vertical" size={SF(26)} color={Colors.themeColor} />
        </TouchableOpacity>
        {renderMenu(item.id)}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View />
        <Text style={styles.header}>Chat</Text>
        <Image source={imagePaths.search_h} style={styles.searchIcon} />
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
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: SF(15),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
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
    marginLeft: 4,
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
    fontFamily: Fonts.Chivo_Regular,
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

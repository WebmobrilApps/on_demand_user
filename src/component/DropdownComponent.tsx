import React, { FC, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, Fonts, SF, SH } from '../utils';

interface DropdownComponentProps{
  data:any
}

const DropdownComponent:FC<DropdownComponentProps>=({data}) => {
  const [value, setValue] = useState(null);

  const renderItem = (item:any)=> {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select reason type"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: SH(43),
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    borderWidth:1,
    borderColor:Colors.textAppColor
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: SF(12),
    fontFamily:Fonts.REGULAR,
    color:Colors.textAppColor
  },
  placeholderStyle: {
    fontSize: SF(12),
    fontFamily:Fonts.REGULAR,
    color:'#7F7F7F'
  },
  selectedTextStyle: {
    fontSize: SF(12),
    fontFamily:Fonts.REGULAR,
    color:Colors.textAppColor
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: SH(42),
    fontSize: SF(16),
    color:Colors.textAppColor
  },
});
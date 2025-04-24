import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { VectoreIcons } from '.';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: number;
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  size = 24,
  color = '#4CAF50',
}) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(!checked)}
      style={[styles.container, { height: size, width: size, borderColor: color }]}
      activeOpacity={0.8}
    >
      {checked && <VectoreIcons
        icon='Entypo'
        size={size - 5}
        color={color}
        name={'check'}
      />}
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
  },
  checkbox: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
  },
});

export default Checkbox;

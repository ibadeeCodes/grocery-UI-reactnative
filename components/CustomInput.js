import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';

const CustomInput = ({
  label,
  text,
  onChangeText,
  keyboardType,
  secureTextEntry,
  placeHolder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: SIZES.body4,
  },
  input: {
    borderWidth: 0,
    padding: 0,
    color: COLORS.tertiary,
  },
  label: {
    fontSize: SIZES.radius,
    color: COLORS.tertiary,
  },
});

export default CustomInput;

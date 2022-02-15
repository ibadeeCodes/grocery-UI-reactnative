import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  LogBox,
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const BackButton = ({styles}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 6,
        ...styles,
      }}>
      <TouchableOpacity
        style={{
          width: 18,
          height: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={icons.back_arrow}
          resizeMode="contain"
          style={{flex: 1}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

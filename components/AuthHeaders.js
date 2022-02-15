import React, {useState, useEffect} from 'react';
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
import {BackButton} from './';

const AuthHeaders = ({bgImage, styles}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        ...styles.shadow,
      }}>
      <ImageBackground source={bgImage} style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            marginTop: SIZES.padding - 8,
            width: '100%',
            alignItems: 'flex-start',
            paddingHorizontal: SIZES.radius,
          }}>
          <BackButton styles={styles.shadow} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuthHeaders;

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
import {AuthHeaders} from '../components';

const SignIn = () => {
  return (
    <View>
      <AuthHeaders bgImage={images.signin} styles={styles} />
      <View style={{marginHorizontal: SIZES.radius}}>
        <Text
          style={{
            color: COLORS.tertiary,
            ...FONTS.h2,
            marginTop: SIZES.body3,
            fontWeight: '700',
          }}>
          Sign In to JojaMart
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            marginTop: 5,
          }}>
          Welcome Back! Sign in with your previous account to continue shopping.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default SignIn;

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';
import {TextButton} from '../components';

const Welcome = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ececee',
        alignItems: 'center',
      }}>
      <View>
        <Image
          source={images.getstarted}
          resizeMode="cover"
          style={{
            width: 300,
            height: 300,
            marginTop: 35,
            marginHorizontal: 30,
            borderRadius: SIZES.base,
          }}
        />
        <Text
          style={{
            color: COLORS.tertiary,
            ...FONTS.h1,
            textAlign: 'center',
            marginTop: SIZES.body2,
            fontWeight: '700',
          }}>
          All your{' '}
          <Text
            style={{
              color: COLORS.secondary,
            }}>
            kitchen needs
          </Text>{' '}
          in your doorstep with cheapest price.
        </Text>
      </View>

      <View style={{position: 'absolute', bottom: 30, left: 0, right: 0}}>
        <TextButton
          label="Get Started"
          customButtonStyle={{height: 48, marginHorizontal: 20}}
          onPress={() => navigation.navigate('SignIn')}
        />
        <Text
          style={{
            color: COLORS.tertiary,
            ...FONTS.body4,
            textAlign: 'center',
            paddingTop: SIZES.base,
          }}>
          Already have an account?{' '}
          <Text
            style={{
              color: COLORS.secondary,
              textDecorationLine: 'underline',
              textShadowColor: COLORS.secondary,
              ...FONTS.body4,
            }}>
            Sign In
          </Text>
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

export default Welcome;

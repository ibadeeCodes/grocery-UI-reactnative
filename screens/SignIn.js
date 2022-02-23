import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Animated,
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';
import {AuthHeaders, CustomInput, TextButton} from '../components';
import {useKeyboard} from '../hooks';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const isKeyBoardOpen = useKeyboard();

  return (
    <View style={{flex: 1}}>
      {!isKeyBoardOpen && (
        <AuthHeaders bgImage={images.signin} styles={styles} />
      )}
      <View style={{marginHorizontal: SIZES.body4, borderTopLeftRadius: 50}}>
        <View>
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
            Welcome Back! Sign in with your previous account to continue
            shopping.
          </Text>
        </View>

        <View style={{marginTop: SIZES.h2}}>
          <CustomInput
            label={'Email'}
            text={email}
            onChangeText={setEmail}
            keyboardType={'email-address'}
            secureTextEntry={false}
            placeHolder={'Enter your email.'}
          />
          <CustomInput
            label={'Password'}
            text={pass}
            onChangeText={setPass}
            keyboardType={'default'}
            secureTextEntry={true}
            placeHolder={'Enter your password.'}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: COLORS.tertiary,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical: 30}}>
        <TextButton
          label="Sign In"
          customButtonStyle={{height: 48, marginHorizontal: 20}}
          onPress={() => navigation.navigate('Home')}
        />
        <Text
          style={{
            color: COLORS.tertiary,
            ...FONTS.body4,
            textAlign: 'center',
            paddingTop: SIZES.base,
          }}>
          Don't have an account?
          <Text
            style={{
              color: COLORS.secondary,
              textDecorationLine: 'underline',
              textShadowColor: COLORS.secondary,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('SignUp')}>
            Register
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

export default SignIn;

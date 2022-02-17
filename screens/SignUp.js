import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';
import {AuthHeaders, CustomInput, TextButton} from '../components';
import {useKeyboard} from '../hooks';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const isKeyBoardOpen = useKeyboard();

  return (
    <View style={{flex: 1}}>
      {!isKeyBoardOpen && (
        <AuthHeaders bgImage={images.signin} styles={styles} />
      )}
      <ScrollView>
        <View style={{marginHorizontal: SIZES.body4, borderTopLeftRadius: 50}}>
          <View>
            <Text
              style={{
                color: COLORS.tertiary,
                ...FONTS.h2,
                marginTop: SIZES.body3,
                fontWeight: '700',
              }}>
              Register to JojaMart
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                marginTop: 5,
              }}>
              Fill this form to create an account.
            </Text>
          </View>

          <View style={{marginTop: SIZES.h2}}>
            <CustomInput
              label={'Full Name'}
              text={fullName}
              onChangeText={setFullName}
              keyboardType={'default'}
              secureTextEntry={false}
              placeHolder={'Enter your full name.'}
            />
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
              text={password}
              onChangeText={setPassword}
              keyboardType={'default'}
              secureTextEntry={true}
              placeHolder={'Enter your password.'}
            />
            <CustomInput
              label={'Confirm Password'}
              text={password2}
              onChangeText={setPassword2}
              keyboardType={'default'}
              secureTextEntry={true}
              placeHolder={'Re-enter your password.'}
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
            label="Register"
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
            Don't have an account?
            <Text
              style={{
                color: COLORS.secondary,
                textDecorationLine: 'underline',
                textShadowColor: COLORS.secondary,
                ...FONTS.body4,
              }}>
              Register
            </Text>
          </Text>
        </View>
      </ScrollView>
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

export default SignUp;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Profile, Cart, Search} from '../screens';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                name="home"
                size={25}
                color={focused ? COLORS.secondary : '#d6d6d6'}
              />
              <Text
                style={{
                  color: focused ? COLORS.secondary : '#d6d6d6',
                  ...FONTS.body5,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                name="search1"
                size={25}
                color={focused ? COLORS.secondary : '#d6d6d6'}
              />
              <Text
                style={{
                  color: focused ? COLORS.secondary : '#d6d6d6',
                  ...FONTS.body5,
                }}>
                Search
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Prices"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="shoppingcart"
                size={25}
                color={focused ? COLORS.secondary : '#d6d6d6'}
              />
              <Text
                style={{
                  color: focused ? COLORS.secondary : '#d6d6d6',
                  ...FONTS.body5,
                }}>
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                name="user"
                size={25}
                color={focused ? COLORS.secondary : '#d6d6d6'}
              />
              <Text
                style={{
                  color: focused ? COLORS.secondary : '#d6d6d6',
                  ...FONTS.body5,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.tertiary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;

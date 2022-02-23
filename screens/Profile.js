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
  Button,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';

const Profile = () => {
  const renderHeader = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          ...styles.shadow,
        }}>
        <ImageBackground
          source={images.profileBg}
          style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              marginHorizontal: SIZES.body3,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={images.avatar}
                style={{height: 80, width: 80}}
                borderRadius={50}
              />
              <Text
                style={{
                  fontSize: SIZES.h1,
                  color: COLORS.white,
                  marginLeft: SIZES.base,
                  fontWeight: 'bold',
                }}>
                John Doe
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderListItems = () => {};

  return <View>{renderHeader()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgGrey,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
});

export default Profile;

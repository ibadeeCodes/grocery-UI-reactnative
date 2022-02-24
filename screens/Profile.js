import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, dummyData, FONTS, images, SIZES} from '../constants';

const Profile = () => {
  const renderHeader = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 130,
          ...styles.shadow,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: COLORS.secondary,
          }}>
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
                  ...FONTS.h1,
                  fontFamily: 'Roboto-Medium',
                  color: COLORS.white,
                  marginLeft: SIZES.base,
                }}>
                John Doe
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderOptions = () => {
    return (
      <ScrollView>
        <View
          style={{
            marginHorizontal: SIZES.body3,
            marginVertical: SIZES.base,
          }}>
          {dummyData.profileOptions.map(item => (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: 'row',
                marginVertical: SIZES.base,
                backgroundColor: COLORS.white,
                padding: SIZES.body4,
                alignItems: 'center',
                borderRadius: SIZES.base - 4,
                ...styles.shadow,
              }}>
              <Icon name={item.icon} size={20} color={COLORS.tertiary} />
              <Text style={{marginLeft: SIZES.body4, color: COLORS.tertiary}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
          <Text style={{textAlign: 'center', color: COLORS.lightGray}}>
            Version 1.0.2
          </Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderOptions()}
    </View>
  );
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
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 3,
  },
});

export default Profile;

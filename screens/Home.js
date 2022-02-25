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
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const renderGreeting = () => {
    return (
      <View
        style={{
          paddingVertical: SIZES.base + 4,
          marginHorizontal: SIZES.body3,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={images.wavingHand} style={{height: 30, width: 30}} />
        <Text
          style={{
            fontSize: SIZES.h2,
            color: COLORS.tertiary,
            fontFamily: 'Roboto-Bold',
            marginLeft: SIZES.base,
          }}>
          Hello, John
        </Text>
      </View>
    );
  };

  const renderDiscountBanner = () => {
    return (
      <View
        style={{
          height: 120,
          marginHorizontal: SIZES.body3,
          marginTop: SIZES.h5,
          borderRadius: SIZES.base,
          overflow: 'hidden',
          ...styles.shadow,
        }}>
        <ImageBackground
          source={images.discountBanner}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          blurRadius={4}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
              fontWeight: 'bold',
            }}>
            Get your first order 35% off
          </Text>
          <TouchableOpacity
            style={{
              height: 30,
              paddingHorizontal: 12,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.base,
              backgroundColor: COLORS.white,
            }}>
            <Text
              style={{
                color: COLORS.secondary,
                ...FONTS.h4,
                fontWeight: 'bold',
              }}>
              Shop Now
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  const renderLocationBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: SIZES.body3,
          marginTop: SIZES.h3,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          padding: SIZES.body3,
          ...styles.shadow,
        }}>
        <TouchableOpacity>
          <Icon name="location-arrow" size={30} color={COLORS.tertiary} />
        </TouchableOpacity>
        <View style={{marginLeft: SIZES.body4}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Deliver to</Text>
            <TouchableOpacity style={{marginLeft: 6}}>
              <Icon name="angle-down" size={20} color={COLORS.tertiary} />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: SIZES.h4,
                fontWeight: 'bold',
                color: COLORS.tertiary,
              }}>
              Jl. Otto Iskander Dinata No. 69 east
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderCategoryItem = ({item, index}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.secondary,
          padding: SIZES.base,
          paddingHorizontal: SIZES.body4,
          borderRadius: 5,
        }}>
        <View>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              marginTop: 5,
            }}
          />
        </View>
        <Text style={{color: COLORS.white, paddingTop: 5}}>{item.title}</Text>
      </View>
    );
  };

  const renderCategories = () => {
    return (
      <View style={{marginHorizontal: SIZES.body3, marginTop: SIZES.h3}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: SIZES.base,
          }}>
          <Text
            style={{
              fontSize: SIZES.h2,
              color: COLORS.tertiary,
              fontFamily: 'Roboto-Medium',
            }}>
            Categories
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: SIZES.body4,
                color: COLORS.secondary,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: SIZES.base}}>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              horizontal={true}
              data={dummyData.categories}
              renderItem={renderCategoryItem}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      height: '100%',
                      width: 10,
                    }}
                  />
                );
              }}
              keyExtractor={(item, index) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </SafeAreaView>
        </View>
      </View>
    );
  };

  const renderBestSellerItem = ({item, index}) => {
    return (
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={{
          flex: 1,
          flexDirection: 'column',
          height: SIZES.height / 3.5,
          borderRadius: SIZES.base,
          overflow: 'hidden',
          marginLeft: (index + 1) % 2 == 1 ? 0 : 4,
          marginRight: (index + 1) % 2 == 0 ? 0 : 4,
          marginVertical: SIZES.base - 4,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(52, 52, 52, 0.6)',
            marginTop: 'auto',
            padding: SIZES.base,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: 'bold',
              fontSize: SIZES.h3,
            }}>
            {item.name}
          </Text>
          <Text style={{color: COLORS.white}}>${item.price} / kg</Text>
        </View>
      </ImageBackground>
    );
  };

  const renderBestSeller = () => {
    return (
      <View style={{marginHorizontal: SIZES.body3, marginTop: SIZES.h3}}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: SIZES.base,
          }}>
          <Text
            style={{
              fontSize: SIZES.h2,
              color: COLORS.tertiary,
              fontFamily: 'Roboto-Medium',
            }}>
            Best Seller
          </Text>
        </View>

        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={dummyData.bestSeller}
            renderItem={renderBestSellerItem}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderGreeting()}
      <ScrollView>
        {renderDiscountBanner()}
        {renderLocationBar()}
        {renderCategories()}
        {renderBestSeller()}
      </ScrollView>
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
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
});

export default Home;

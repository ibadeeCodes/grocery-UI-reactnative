import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, dummyData, FONTS, images, SIZES} from '../constants';
import {BackButton} from '../components/index';

const Product = () => {
  const weights = [
    {id: 1, w: '100 g'},
    {id: 2, w: '500 g'},
    {id: 3, w: '1 kg'},
    {id: 4, w: '1.5 kg'},
    {id: 5, w: '2 kg'},
    {id: 6, w: '3 kg'},
    {id: 7, w: '4 kg'},
    {id: 8, w: '5 kg'},
    {id: 9, w: '10 kg'},
  ];

  const renderProdImg = () => {
    return (
      <View
        style={{
          height: 250,
          marginHorizontal: SIZES.body3,
          marginTop: SIZES.h2 - 4,
          borderRadius: SIZES.base,
          overflow: 'hidden',
          ...styles.shadow,
        }}>
        <ImageBackground
          source={require('../assets/images/bestseller/apple.jpg')}
          style={{
            flex: 1,
            alignItems: 'flex-start',
            padding: SIZES.base,
          }}>
          <BackButton />
        </ImageBackground>
      </View>
    );
  };

  const renderWeights = () => {
    return (
      <View style={{marginVertical: SIZES.base}}>
        <Text
          style={{
            color: COLORS.black,
            paddingBottom: SIZES.base,
            fontWeight: 'bold',
          }}>
          Select Weight
        </Text>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            horizontal={true}
            data={weights}
            renderItem={({item}) => (
              <View
                style={{
                  padding: SIZES.base,
                  borderColor: COLORS.secondary,
                  borderWidth: 2,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: COLORS.gray,
                  }}>
                  {item.w}
                </Text>
              </View>
            )}
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
    );
  };

  const prodCategory = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.h4,
          alignItems: 'center',
          backgroundColor: '#ccc',
          justifyContent: 'space-around',
          width: '25%',
          padding: SIZES.base,
          borderRadius: 50,
          backgroundColor: '#ffe0b2',
        }}>
        <Image
          source={require('../assets/images/categories/fruits.png')}
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text style={{color: COLORS.tertiary}}>Fruit</Text>
      </View>
    );
  };

  const renderProdDesc = () => {
    return (
      <View
        style={{
          marginHorizontal: SIZES.body3,
          marginTop: SIZES.h2,
          marginBottom: 80,
          borderRadius: SIZES.base,
          padding: SIZES.h3,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: COLORS.black}}>
            Red Apple
          </Text>
          <Icon name="heart" size={20} color={COLORS.red} />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: COLORS.black,
            fontSize: SIZES.h2,
          }}>
          $ 45.75{' '}
          <Text
            style={{
              color: COLORS.gray,
              fontSize: SIZES.body5,
            }}>
            / kg
          </Text>
        </Text>
        {prodCategory()}
        {renderWeights()}
        <View style={{marginTop: SIZES.base}}>
          <Text
            style={{
              color: COLORS.black,
              paddingBottom: SIZES.base,
              fontWeight: 'bold',
            }}>
            Product Description
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's.
          </Text>
        </View>
      </View>
    );
  };

  const renderTotalBill = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          height: 100,
          width: '100%',
          flexDirection: 'row',
          backgroundColor: COLORS.white,
          padding: SIZES.body4,
          alignItems: 'center',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'space-between',
          ...styles.shadow,
        }}>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text>Total Price</Text>
          <Text
            style={{
              fontSize: SIZES.h2,
              fontWeight: 'bold',
              color: COLORS.black,
            }}>
            $750.50
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: SIZES.body4,
              color: COLORS.white,
              backgroundColor: COLORS.secondary,
              padding: SIZES.body4,
              borderRadius: SIZES.base - 2,
            }}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderProdImg()}
        {renderProdDesc()}
        {/* {renderTotalBill()} */}
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

export default Product;

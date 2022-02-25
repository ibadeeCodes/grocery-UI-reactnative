import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, dummyData, FONTS, images, SIZES} from '../constants';

const Product = () => {
  const categoryItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: SIZES.base,
          backgroundColor: COLORS.white,
          padding: SIZES.base,
          borderRadius: SIZES.base - 4,
          marginHorizontal: SIZES.base - 4,
          ...styles.shadow,
        }}>
        <View style={{height: 100}}>
          <Image
            source={item.image}
            style={{width: 100, height: '100%', borderRadius: SIZES.base - 2}}
          />
        </View>
        <View style={{paddingLeft: SIZES.base + 5}}>
          <Text
            style={{
              color: COLORS.tertiary,
              fontSize: SIZES.h3,
              fontFamily: 'Roboto-Light',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              marginVertical: SIZES.base - 2,
            }}>
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.tertiary,
                fontWeight: 'bold',
              }}>
              {item.price}
            </Text>
            <Text
              style={{
                fontSize: SIZES.body5,
                color: COLORS.gray,
                marginLeft: SIZES.base - 4,
                fontFamily: 'Roboto-Italic',
              }}>
              / kg
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Icon name="minuscircleo" size={15} color={COLORS.tertiary} />
            </TouchableOpacity>
            <Text style={{marginHorizontal: SIZES.base - 2}}>
              {item.weight}
            </Text>
            <TouchableOpacity>
              <Icon name="pluscircleo" size={15} color={COLORS.tertiary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderCartItems = () => {
    return (
      <View
        style={{
          marginHorizontal: SIZES.body3,
        }}>
        <View
          style={{
            paddingVertical: SIZES.base + 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={images.shoppingCart} style={{height: 30, width: 30}} />
          <Text
            style={{
              fontSize: SIZES.h2,
              color: COLORS.tertiary,
              fontFamily: 'Roboto-Bold',
              marginLeft: SIZES.base - 3,
            }}>
            Cart
          </Text>
        </View>

        <View>
          <FlatList
            data={dummyData.cartItemData}
            renderItem={categoryItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  const renderCouponBox = () => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        padding: SIZES.body4,
        alignItems: 'center',
        borderRadius: SIZES.base - 4,
        borderRadius: SIZES.base - 2,
        justifyContent: 'space-between',
        ...styles.shadow,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Icon name="tago" size={20} color={COLORS.tertiary} />
        <Text
          style={{
            marginLeft: SIZES.body5 - 2,
            color: COLORS.tertiary,
            fontWeight: 'bold',
          }}>
          Have a coupon?
        </Text>
      </View>
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
    </TouchableOpacity>
  );

  const renderTotalBill = () => {
    return (
      <TouchableOpacity
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
            Buy Now
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderCartItems()}
      {renderTotalBill()}
      <View>{renderCouponBox()}</View>
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

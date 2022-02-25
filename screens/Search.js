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
import Icon from 'react-native-vector-icons/AntDesign';
import {CustomInput, SearchBar} from '../components';
import {useKeyboard} from '../hooks';

const Search = () => {
  const isKeyBoardOpen = useKeyboard();
  const searchHistoryItems = [
    'Wheat',
    'apple',
    'Ban',
    'l',
    'Fruit',
    'Cherry',
    'Pineapple',
  ];

  const [showSearchHistory, setShowSearchHistory] = useState(true);

  const renderGreeting = () => {
    return (
      <View
        style={{
          paddingVertical: SIZES.base + 2,
          marginHorizontal: SIZES.body3,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={images.search} style={{height: 30, width: 30}} />
        <Text
          style={{
            fontSize: SIZES.h2,
            color: COLORS.tertiary,
            fontFamily: 'Roboto-Bold',
            marginLeft: SIZES.base - 3,
          }}>
          Search
        </Text>
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

  const renderSearchHistory = () => {
    return (
      <View
        style={{
          marginHorizontal: SIZES.body3,
          paddingBottom: showSearchHistory ? 5 : 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: SIZES.h3,
              color: COLORS.tertiary,
              fontFamily: 'Roboto-Medium',
              marginBottom: showSearchHistory ? 5 : 0,
            }}>
            Search History
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: SIZES.body4,
                color: COLORS.secondary,
              }}
              onPress={() => setShowSearchHistory(!showSearchHistory)}>
              {showSearchHistory ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        {showSearchHistory && (
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {searchHistoryItems.map((item, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  marginRight: SIZES.base,
                  padding: SIZES.base - 2,
                  borderRadius: SIZES.body1,
                  paddingHorizontal: SIZES.base + 4,
                  marginVertical: SIZES.base,
                  ...styles.shadow,
                }}>
                <Text
                  style={{
                    marginRight: SIZES.base,
                    color: COLORS.tertiary,
                  }}>
                  {item}
                </Text>
                <TouchableOpacity>
                  <Icon name={'close'} size={15} color={COLORS.black} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
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
              fontSize: SIZES.h3,
              color: COLORS.tertiary,
              fontFamily: 'Roboto-Medium',
            }}>
            You might like
          </Text>
        </View>

        <ScrollView>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={dummyData.bestSeller}
              renderItem={renderBestSellerItem}
              //Setting the number of column
              numColumns={2}
              keyExtractor={(item, index) => item.id}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View style={{marginTop: 5, marginBottom: showSearchHistory ? 15 : 10}}>
        <SearchBar
          clicked={true}
          searchPhrase={''}
          setSearchPhrase={() => {}}
          setCLicked={() => {}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderGreeting()}
      {renderSearchBar()}
      {!isKeyBoardOpen && <View>{renderSearchHistory()}</View>}
      {renderBestSeller()}
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
    elevation: 2,
  },
});

export default Search;

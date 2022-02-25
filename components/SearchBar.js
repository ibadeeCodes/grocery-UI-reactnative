// SearchBar.js
import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../constants';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar__unclicked}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* search Icon */}
          <Icon
            name="search1"
            size={20}
            color="black"
            style={{marginLeft: 1}}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search Product"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
          />
        </View>
        <View>
          <Icon name="close" size={20} color="black" style={{padding: 1}} />
        </View>
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.body3,

    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // flexDirection: 'row',
    // width: '100%',
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: SIZES.base,
    justifyContent: 'space-between',
  },
  searchBar__unclicked: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    // width: '95%',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    alignItems: 'center',
  },

  input: {
    fontSize: 16,
    marginLeft: 10,
    // width: '90%',
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

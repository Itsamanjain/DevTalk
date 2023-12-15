import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View>
      <TextInput placeholder= "Search - Meeting"
      style={styles.serachBox}/>
    </View>
  );
};

export default SearchBar;


const styles = StyleSheet.create({
    serachBox:{
        height: 60,
         borderColor: 'gray',
          borderWidth: 1,
           padding: 10 ,
           borderRadius:20 ,
           margin:10,
    }
});

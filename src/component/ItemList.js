//@refresh reset
import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ItemList = props => {

  return (
    <ScrollView>
      {props.itemList.map((item) =>
        <TouchableOpacity 
          key={item} 
          activeOpacity ={0.8} 
          onPress = {()=> props.deleteItemHandler(item)} 
        >
          <View style={styles.itemList}>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black"
  }
});

export default ItemList;
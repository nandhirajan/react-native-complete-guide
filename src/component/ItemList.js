//@refresh reset
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ItemList = props => {

    return (
      <ScrollView>
        {props.itemList.map((item) =>
          <View key={item} style={styles.itemList}>
            <Text>{item}</Text>
          </View>
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
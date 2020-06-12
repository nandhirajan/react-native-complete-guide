//@refresh reset
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

import ItemInput from './src/component/ItemInput';
import ItemList from './src/component/ItemList';

const styles = StyleSheet.create({
  root: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  itemList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black"
  }
});

export default function App() {
  const [inputItem, setInputItem] = useState("");
  const [itemList, setItemList] = useState([]);

  onChangeItemHandler = (enteredText) => {
    setInputItem(enteredText)
  }

  onClickHandler = () => {
    setItemList([...itemList, inputItem]);
    // setInputItem("");
  }

  return (
    <View style={styles.root}>
      <ItemInput
        onChangeItemHandler ={onChangeItemHandler}
        inputItem = {inputItem}
        onClickHandler = {onClickHandler}
      />

      <ItemList 
        itemList={itemList}
      />
    </View>

  );
}


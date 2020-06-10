import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [inputItem, setInputItem] = useState("");
  const [itemList, setItemList] = useState([]);

  onChangeItemHandler = (enteredText) => {
    setInputItem(enteredText)
  }

  onClickHandler = () => {
    setItemList([...itemList, inputItem]);
    setInputItem("");
  }

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your the item"
          style={styles.inputText}
          onChangeText={onChangeItemHandler}
          value={inputItem}
        />
        <Button title="ADD" onPress={onClickHandler} />
      </View>

      <View>
        {itemList.map((item) =>
          <Text key={item}>{item}</Text>
        )}
      </View>
    </View>

  );
}

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
  }
});

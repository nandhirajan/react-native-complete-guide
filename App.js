//@refresh reset
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ItemInput from './src/component/ItemInput';
import ItemList from './src/component/ItemList';

const styles = StyleSheet.create({
  root: {
    padding: 30
  }
});

export default function App() {
  const [itemList, setItemList] = useState([]);

  onClickHandler = (inputItem) => {
    setItemList([...itemList, inputItem]);
    // setInputItem("");
  }

  return (
    <View style={styles.root}>
      <ItemInput
        onClickHandler={onClickHandler}
      />

      <ItemList
        itemList={itemList}
      />
    </View>

  );
}


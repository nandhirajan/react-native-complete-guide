//@refresh reset
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import ItemInput from './src/component/ItemInput';
import ItemList from './src/component/ItemList';

const styles = StyleSheet.create({
  root: {
    padding: 30
  }
});

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [showModal, setShowModal] = useState(false);  

  onClickHandler = (inputItem) => {
    setItemList([...itemList, inputItem]);
    setShowModal(false);
  }
  
  deleteItemHandler = (item) => {
    const updatedList = itemList.filter(ele => ele!==item );
    setItemList(updatedList);
  }

  onClose = () => {
    setShowModal(false);
  }

  return (
    <View style={styles.root}>
      <Button title="Add new item" onPress = {() => setShowModal(true)}/>

      <ItemInput
        visible = {showModal}
        onClickHandler={onClickHandler}
        onClose ={onClose}
      />

      <ItemList
        deleteItemHandler={deleteItemHandler}
        itemList={itemList}  
      />
    </View>

  );
}


//@refresh reset
import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const ItemInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter your the item"
                style={styles.inputText}
                onChangeText={props.onChangeItemHandler}
                value={props.inputItem}
            />
            <Button title="ADD" onPress={props.onClickHandler} />
        </View>)
}

const styles = StyleSheet.create({
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

  
export default ItemInput;
//@refresh reset
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const ItemInput = props => {

    const [inputItem, setInputItem] = useState("");

    onChangeItemHandler = (enteredText) => {
        setInputItem(enteredText);
    }

    onClickHandler = (inputItem) => {
        setInputItem("");
        props.onClickHandler(inputItem);
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your the item"
                    style={styles.inputText}
                    onChangeText={onChangeItemHandler}
                    value={inputItem}
                />
                <Button title="ADD" onPress={() => onClickHandler(inputItem)} />
                <Button title="CANCEL" color ="red" onPress={props.onClose} />
            </View>
        </Modal>)
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputText: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginBottom: 10
    }
});


export default ItemInput;
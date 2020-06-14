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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onClose} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={() => onClickHandler(inputItem)} />
                    </View>

                </View>
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
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%"
    },
    button: {
        width: "40%"
    }
});


export default ItemInput;
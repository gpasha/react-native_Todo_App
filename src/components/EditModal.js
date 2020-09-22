import React, { useState } from 'react'
import { View, StyleSheet, Modal, Button, TextInput,Alert } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ modalVisible, onCancel, value, saveTodo }) => {

    const [title, setTitle ] = useState(value)

    const saveHandler = () => {
        if ( title.trim().length < 3 ){
            Alert.alert(
                'Error',
                `Min length of the name is 3 symbol.
                Now ${title.trim().length} symbol(s)`
            )
        }
        else (
            saveTodo(title)
        )
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.wrapper} >
                <TextInput  style={styles.input}
                            placeholder='Enter the issue name'
                            autoCapitalize='none'
                            autoCorrect={false}
                            maxLength={64}
                            value={title}
                            onChangeText={setTitle} />
                <View style={styles.buttons} >
                    <Button title='Cancel' color={THEME.RED_COLOR} onPress={onCancel} />
                    <Button title='Save' onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        width: '80%',
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: THEME.GREY_BORDER_COLOR,
        fontSize: 18
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert, Keyboard } from 'react-native'
import { THEME } from '../theme'
import { AntDesign } from '@expo/vector-icons'; 

export const AppTodo = ( { onSubmit } ) => {

    const [ value, setValue ] = useState('');

    const onPressAdd = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        }
        else {
            Alert.alert('The input can not be empty');
        }
    }
    
    return (
        <View style={styles.wrapper}>
            <TextInput  style={styles.input}
                        value={value}
                        onChangeText={setValue}
                        placeholder='Enter the task name'
                        autoCorrect={true}
                        autoCapitalize='none' />
            <AntDesign.Button name="pluscircleo" onPress={ onPressAdd } >
                Add
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10
    },
    input: {
        width: '65%',
        borderBottomWidth: 2,
        borderBottomColor: THEME.GREY_BORDER_COLOR,
        padding: 5,
        marginRight: '10%'
    }
})
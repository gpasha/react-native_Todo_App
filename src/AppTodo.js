import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

export const AppTodo = ( { onSubmit } ) => {

    const [ value, setValue ] = useState('');

    const onPressAdd = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
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
            <Button title='Add' style={styles.button} onPress={ onPressAdd }/>
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
        borderBottomColor: 'gray',
        padding: 5,
        marginRight: '10%'
    },
    button: {
        width: '25%',
        borderWidth: 2,
        borderColor: 'gray',
        backgroundColor: 'red'
    }
})
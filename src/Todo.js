import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ( {id, title, remove} ) => {
    const removeHandler = () => {
        remove(id)
    }
    return (
        <TouchableOpacity activeOpacity={0.5} 
                          onLongPress={removeHandler}>
            <View style={style.todo}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    todo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ccc',
        marginHorizontal: 10,
        marginBottom: 10
    }
});
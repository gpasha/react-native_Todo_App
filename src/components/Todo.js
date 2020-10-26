import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from '../ui/AppText'

export const Todo = ( {id, title, remove, openTodo} ) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={() => openTodo(id)}
                          onLongPress={remove.bind(null, id)}>
            <View style={style.todo}>
                <AppText>{title}</AppText>
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
import React from 'react'
import { View, StyleSheet } from 'react-native'

export const AppCard = (props) => {
    return (
        <View style={ {...styles.default, ...props.style} } >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        backgroundColor: '#fff'
    }
})
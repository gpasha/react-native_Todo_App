import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = ({title}) => {
    
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#f0f0f0'
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        color: '#000'
    }
})
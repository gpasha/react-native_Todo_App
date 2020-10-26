import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { THEME } from '../theme'
import { AppTextBold } from '../ui/AppTextBold'

export const Navbar = ({title}) => {
    
    return (
        <View style={{
            ...styles.navbar,
            ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid
            })
        }}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 5
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarIos: {
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: THEME.GREY_BORDER_COLOR
    },
    text: {
        fontSize: 30,
        color: Platform.OS === 'android' ? '#000' : THEME.GREY_BORDER_COLOR
    }
})
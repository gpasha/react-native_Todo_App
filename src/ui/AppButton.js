import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppTextBold } from '../ui/AppTextBold'
import { THEME } from '../theme'

export const AppButton = ({ children, onPress, color = THEME.GREEN_COLOR}) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={{...Styles.button, backgroundColor: color}}>
                <AppTextBold style={Styles.buttonText}>{children}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff'
    }
})
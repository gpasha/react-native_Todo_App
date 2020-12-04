import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { MAIN_COLOR } from '../theme'

export const AppLoader = () => (
    <View style={styles.center}>
        <ActivityIndicator size='large' color={MAIN_COLOR} />
    </View>
)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
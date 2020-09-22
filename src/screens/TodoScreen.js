import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../ui/AppCard'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ todo, goBack, remove, save }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        save(todo.id, title)
        setModal(false)
    }
    
    return (
        <View style={styles.wrapper}>

            <EditModal  modalVisible={modal}
                        value={todo.title}
                        onCancel={ () => setModal(false) }
                        saveTodo={saveHandler} />

            <AppCard style={styles.card}>
                <Text>{todo.title}</Text>
                <Button title='Edit' onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Cancel' color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title='Delete' color={THEME.RED_COLOR} onPress={() => remove(todo.id)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Button: {
        width: '45%'
    },
    card: {
        marginBottom: 20
    }
})
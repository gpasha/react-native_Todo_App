import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'
import { AppCard } from '../ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../ui/AppTextBold'
import { AppButton } from '../ui/AppButton'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {

    const { todos, removeTodo, updateTodo } = useContext(TodoContext)

    const { changeScreens, todoId } = useContext(ScreenContext)

    const todo = todos.find( t => t.id === todoId )

    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        updateTodo(todo.id, title)
        setModal(false)
    }
    
    return (
        <View style={styles.wrapper}>

            <EditModal  modalVisible={modal}
                        value={todo.title}
                        onCancel={ () => setModal(false) }
                        saveTodo={saveHandler} />

            <AppCard style={styles.card}>
                <AppTextBold>{todo.title}</AppTextBold>
                {/* <Button title='Edit' onPress={() => setModal(true)}/> */}
                <AppButton onPress={() => setModal(true)} color={THEME.GREEN_COLOR}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    {/* <Button title='Cancel' color={THEME.GREY_COLOR} onPress={goBack} /> */}
                    <AppButton onPress={ () => changeScreens(null) } color={THEME.GREY_COLOR}>
                        <AntDesign name='back' size={20} />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    {/* <Button title='Delete' color={THEME.RED_COLOR} onPress={() => remove(todo.id)} /> */}
                    <AppButton  onPress={() => removeTodo(todo.id)} color={THEME.RED_COLOR}>
                        <FontAwesome name='remove' size={20} />
                    </AppButton>
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
    button: {
        // width: '45%',
        width: Dimensions.get("window").width > 400 ? 150 : 100,
    },
    card: {
        marginBottom: 20
    }
})
import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer} from './todoReducer'
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../types'
import { ScreenContext } from '../screen/screenContext'

export const TodoState = ({ children }) => {

    const initialState = {
        todos: [{id: '1', title: 'Learn React'}]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)    

    const { changeScreens } = useContext(ScreenContext)

    const addTodo = title => dispatch({ type: ADD_TODO, title})

    const removeTodo = id => {
        const todos = state.todos.find( t => t.id === id)
        Alert.alert(
            'Remove item',
            `Do you really want to remove the "${todos.title}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                { text: 'OK',
                    onPress: () => {
                        changeScreens(null)
                        dispatch({ type: REMOVE_TODO, id})
                    }
                }
            ]
        );        
    }

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title})

    return <TodoContext.Provider
                value={{
                    todos: state.todos,
                    addTodo,
                    removeTodo,
                    updateTodo
                }}
            >
                {children}
            </TodoContext.Provider>
}
import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer} from './todoReducer'
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, FETCH_TODOS, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR } from '../types'
import { ScreenContext } from '../screen/screenContext'
import { Http } from '../../http'

export const TodoState = ({ children }) => {

    const initialState = {
        todos: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)    

    const { changeScreens } = useContext(ScreenContext)

    const addTodo = async title => {
        clearError()        
        try {
            const data = await Http.post(
                'https://react-native-todo-app-f0b62-default-rtdb.firebaseio.com/todos.json',
                { title }
            )
            dispatch({ type: ADD_TODO, title, id: data.name })
        }
        catch(e) {
            showError('Something went wrong...')
            console.log('error: ', e)
        }
    }

    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const data = await Http.get('https://react-native-todo-app-f0b62-default-rtdb.firebaseio.com/todos.json')
            const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
            dispatch({ type: FETCH_TODOS, todos })
        }
        catch(e) {
            showError('Something went wrong...')
            console.log('error: ', e)
        }
        finally {
            hideLoader()
        }
    }

    const updateTodo = async (id, title) => {
        clearError()
        try {
            await Http.patch(`https://react-native-todo-app-f0b62-default-rtdb.firebaseio.com/todos/${id}.json`, { title })
            dispatch({ type: UPDATE_TODO, id, title })
        }
        catch(e) {
            showError('Something went wrong...')
            console.log('error: ', e)
        }
    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error => dispatch({ type: SHOW_ERROR, error})

    const clearError = () => dispatch({ type: CLEAR_ERROR })

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
                    onPress: async () => {
                        changeScreens(null)                        
                        await Http.delete(
                            `https://react-native-todo-app-f0b62-default-rtdb.firebaseio.com/todos/${id}.json`
                        )
                        dispatch({ type: REMOVE_TODO, id})
                    }
                }
            ]
        );        
    }

    return <TodoContext.Provider
                value={{
                    todos: state.todos,
                    loading: state.loading,
                    error: state.error,
                    fetchTodos,
                    addTodo,
                    removeTodo,
                    updateTodo
                }}
            >
                {children}
            </TodoContext.Provider>
}
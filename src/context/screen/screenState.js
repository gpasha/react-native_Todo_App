import React, { useReducer } from 'react'
import { ScreenContext } from './screenContext'
import { screenReducer } from './screenReducer'
import { CHANGE_SCREEN } from '../types.js'

export const ScreenState = ({ children }) => {
    const [state, dispatch] = useReducer(screenReducer, null)

    const changeScreens = id => dispatch({ type: CHANGE_SCREEN, payload: id })

    return (
        <ScreenContext.Provider
            value={{
                changeScreens,
                todoId: state
            }}
        >
            {children}
        </ScreenContext.Provider>
    )
}
import React, { useState } from 'react'
import { View, Alert} from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState( [] )

  const addTodo = (title) => {
    setTodos( prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = (id) => {
    const todoDelete = todos.find( t => t.id === id )
    Alert.alert(
      'Remove item',
      `Do you really want to remove the "${todoDelete.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK',
          onPress: () => {
            setTodoId(null)
            setTodos( prev => prev.filter( el => el.id !== id ))
          }
        }
      ]
    );
    
  }

  const updateTodo = (id, title) => {
    setTodos( old => old.map( item => {
      if ( item.id === id ) {
        item.title = title
      }
      return item
    }))
  }

  let content = (
    <MainScreen todos={todos}
                addTodo={addTodo}
                removeTodo={removeTodo}
                openTodo={setTodoId} /> 
  )

  if ( todoId ) {
    let selectedTodo = todos.find( todo => todo.id === todoId);
    content = <TodoScreen todo={selectedTodo} remove={removeTodo} goBack={() => setTodoId(null)} save={updateTodo} />
  }

  return (
    <View>
      <Navbar title='Todo APP'/>
      { content }
    </View>
  );
}

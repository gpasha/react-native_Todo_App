import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList} from 'react-native'
import { Navbar } from './src/Navbar'
import { AppTodo } from './src/AppTodo'
import { Todo } from './src/Todo'

export default function App() {

  const [todos, setTodos] = useState( [] );
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
    setTodos( prev => prev.filter( el => el.id !== id ))
  }
  
  return (
    <View style={styles.container}>
      <Navbar title='Todo APP'/>
      <AppTodo onSubmit={addTodo} />
      <FlatList
        style={styles.containerList}
        data={todos}
        renderItem={({ item }) => (
          <Todo id={item.id} title={item.title} remove={removeTodo} />
        )}      
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    maxHeight: '80%'
  }
});

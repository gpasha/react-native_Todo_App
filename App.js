import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList} from 'react-native'
import { Navbar } from './src/Navbar'
import { AppTodo } from './src/AppTodo'
import { Todo } from './src/Todo'

export default function App() {

  const [todos, setTodos] = useState( [] );
  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    // setTodos(todos.concat(newTodo));
    // setTodos([...todos, newTodo])
    // setTodos(prev => {
    //   return [
    //     ...prev,
    //     newTodo
    //   ]
    // })
    setTodos( prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  // let todoList = todos.map( toDo => {
  //   return <Todo key={toDo.id} title={toDo.title}></Todo>
  // })
  
  return (
    <View style={styles.container}>
      <Navbar title='Todo APP'/>
      <AppTodo onSubmit={addTodo} />
      <FlatList
        style={styles.containerList}
        data={todos}
        renderItem={({ item }) => (
          <Todo title={item.title} />
        )}      
        keyExtractor={item => item.id}
      />
      {/* <ScrollView>
        { todos.map( toDo => {()
            return <Todo key={toDo.id} title={toDo.title}></Todo>
          })
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    maxHeight: '80%'
  }
});

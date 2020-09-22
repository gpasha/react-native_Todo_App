import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { AppTodo } from '.././components/AppTodo'
import { Todo } from '.././components/Todo'

export const MainScreen = ({ addTodo, removeTodo, todos, openTodo }) => {
    return (
        <View>
            <AppTodo onSubmit={addTodo} />
            <FlatList
                style={styles.containerList}
                data={todos}
                renderItem={({ item }) => (
                    <Todo id={item.id} title={item.title} remove={removeTodo} openTodo={openTodo} />
                )}      
                keyExtractor={item => item.id}
            />
        </View>
      )
}

const styles = StyleSheet.create({
  containerList: {
    maxHeight: '80%'
  }
});
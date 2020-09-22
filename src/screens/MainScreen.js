import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { AppTodo } from '.././components/AppTodo'
import { Todo } from '.././components/Todo'

export const MainScreen = ({ addTodo, removeTodo, todos, openTodo }) => {

  let content = (
    <FlatList
      style={styles.containerList}
      data={todos}
      renderItem={({ item }) => (
          <Todo id={item.id} title={item.title} remove={removeTodo} openTodo={openTodo} />
      )}      
      keyExtractor={item => item.id}
    />
  )

  if ( todos.length === 0 ) {
    content = (
      <View style={styles.imageBlock} >
        <Image style={styles.image} source={require('../../assets/empty_list.jpg')} />
        {/* <Image style={styles.image} source={{ uri: 'https://cdn.onlinewebfonts.com/svg/img_60937.png' }} />         */}
      </View>
    )
  }

  return (
      <View>
          <AppTodo onSubmit={addTodo} />

          { content }
          
      </View>
    )
}

const styles = StyleSheet.create({
  containerList: {
    maxHeight: '80%'
  },
  imageBlock: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    opacity: 0.2
  }
});
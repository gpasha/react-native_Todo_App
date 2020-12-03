import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import { AppTodo } from '.././components/AppTodo'
import { Todo } from '.././components/Todo'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { THEME } from '../theme'

export const MainScreen = ({ }) => {

  const { addTodo, todos, removeTodo } = useContext(TodoContext)
  const { changeScreens } = useContext(ScreenContext)

  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width)

  useEffect( () => {
    const updateDeviceWidth = () => {
      const width = Dimensions.get('window').width
      setDeviceWidth(width)
    }
    Dimensions.addEventListener('change', updateDeviceWidth)
    return () => {
      Dimensions.removeEventListener('change', updateDeviceWidth)
    }
  })

  
  let content = (
    // styles adaptive
    // <FlatList
    //   style={styles.containerList}
    //   data={todos}
    //   renderItem={({ item }) => (
    //       <Todo id={item.id} title={item.title} remove={removeTodo} openTodo={openTodo} />
    //   )}      
    //   keyExtractor={item => item.id}
    // />
    
    // adaptive with Dimensions object
    <View style={{ width: deviceWidth }}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
            <Todo id={item.id} title={item.title} remove={removeTodo} openTodo={changeScreens} />
        )}      
        keyExtractor={item => item.id}
      />
    </View>
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
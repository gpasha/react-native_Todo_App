import React, { useState, useEffect, useContext, useCallback } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import { AppTodo } from '.././components/AppTodo'
import { Todo } from '.././components/Todo'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { THEME } from '../theme'
import { AppButton } from '../ui/AppButton'
import { AppLoader } from '../ui/AppLoader'

export const MainScreen = ({ }) => {

  const { todos, loading, error, fetchTodos, addTodo, removeTodo } = useContext(TodoContext)
  
  const { changeScreens } = useContext(ScreenContext)

  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width)

  const loadTodos = useCallback( async () => await fetchTodos(), [fetchTodos] )

  useEffect(() => {
    loadTodos()
  }, [])

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

  if ( loading ) {
    return <AppLoader />
  }

  if ( error ) {
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.errorText}>{error}</Text>
        <AppButton onPress={loadTodos}>Try again</AppButton>
      </View>
    )
  }
  
  let content = (    
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
  },
  errorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 20,
    color: THEME.RED_COLOR
  }
});
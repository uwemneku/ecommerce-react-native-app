import React from 'react'
import { StyleSheet } from 'react-native'
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import {enableScreens} from 'react-native-screens';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(89, 86, 233, 1)',
    text: '#868686',
    background: '#F2F2F2'
  },
};

enableScreens();
const App = () => {
  return (
    <Provider store={store} >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={MyTheme} >
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}


export default App

const styles = StyleSheet.create({})



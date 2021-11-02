import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import Second from './src/screens/Second';
import { TransitionPresets } from '@react-navigation/stack';
import OnboardingNavigation from './src/navigation/OnboardingNavigation';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(89, 86, 233, 1)',
    text: '#868686'
  },
};
enableScreens();

const {Navigator, Screen} = createSharedElementStackNavigator()
const App = () => {
  return (
    <NavigationContainer theme={MyTheme} >
      <Navigator screenOptions={{headerShown:false}} defaultScreenOptions={{...TransitionPresets.SlideFromRightIOS, headerShown:false}}>
          <Screen name='Main' component={OnboardingNavigation} />
          <Screen name='Second' component={Second} />
      </Navigator>
    </NavigationContainer>
  )
}


export default App

const styles = StyleSheet.create({})



import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import Main from './src/screens/Main';
import Second from './src/screens/Second';
import { TransitionPresets } from '@react-navigation/stack';
import OnboardingNavigation from './src/navigation/OnboardingNavigation';

enableScreens();

const {Navigator, Screen} = createSharedElementStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}} defaultScreenOptions={{...TransitionPresets.SlideFromRightIOS, headerShown:false}}>
          <Screen name='Main' component={OnboardingNavigation} />
          <Screen name='Second' component={Second} />
      </Navigator>
    </NavigationContainer>
  )
}


export default App

const styles = StyleSheet.create({})



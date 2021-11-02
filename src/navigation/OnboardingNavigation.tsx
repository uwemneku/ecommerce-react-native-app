import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { onBoardingRoute } from '../@types/navigation'
import { AppAuthScreen, AppSplashScreen } from '../screens/onboarding'

const {Navigator, Screen} = createStackNavigator<onBoardingRoute>()
const OnboardingNavigation = () => {
    return (
        <Navigator
            screenOptions={{headerShown:false, ...TransitionPresets.SlideFromRightIOS}}
        >
            <Screen name='splash' component={AppSplashScreen} />
            <Screen name='login' component={AppAuthScreen} />
        </Navigator>
    )
}

export default OnboardingNavigation


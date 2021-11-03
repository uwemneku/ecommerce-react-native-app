import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppSelector } from '../hooks/redux'
import AppNavigator from './DrawerNavigator'
import OnboardingNavigation from './OnboardingNavigation'

const RootNavigator = () => {
    const {isLoggedIn} = useAppSelector(state => state.authState)

    
    return (
        <View style={{flex:1}}>
            {
                isLoggedIn ? 
                    <AppNavigator />
                    :
                    <OnboardingNavigation />
            }
            <Text></Text>
        </View>
    )
}

export default RootNavigator


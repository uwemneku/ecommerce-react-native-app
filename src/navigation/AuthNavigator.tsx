import React from 'react'
import { Text, View } from 'react-native'
import { useAppSelector } from '../hooks/redux'
import AppNavigator from './DrawerNavigator'
import OnboardingNavigation from './OnboardingNavigation'

const AuthNavigator = () => {
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

export default AuthNavigator


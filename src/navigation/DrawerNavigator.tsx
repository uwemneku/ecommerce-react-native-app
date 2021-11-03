import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import {  } from 'react-navigation-shared-element'
import { AppRoutes, DrawerRoutes } from '../@types/navigation'
import BottomTabNavigator from './BottomTabNavigator'
import {CheckOutScreen} from '../screens/StackScreens'

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent'
import { useTheme } from '@react-navigation/native'

const {Navigator, Screen} = createDrawerNavigator<DrawerRoutes>();

const AppNavigator = () => {
    const {width} = useWindowDimensions()
    const {primary:backgroundColor} = useTheme().colors
    return (
       <Navigator 

            screenOptions={{
                headerShown:false, 
                drawerType:'slide',
                drawerStyle: {width:width/2, backgroundColor:'#5956E9'},
                overlayColor: 'transparent'
            }} 
            initialRouteName='Home' 
            drawerContent={(props)=><DrawerContent {...props} />}
        >
           <Screen name='Home' component={BottomTabNavigator}/>
           <Screen name='My orders' component={CheckOutScreen}/>
       </Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})

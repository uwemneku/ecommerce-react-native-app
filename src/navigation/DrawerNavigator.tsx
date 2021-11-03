import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  } from 'react-navigation-shared-element'
import { AppRoutes } from '../@types/navigation'
import BottomTabNavigator from './BottomTabNavigator'
import {CheckOutScreen} from '../screens/StackScreens'

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent'

const {Navigator, Screen} = createDrawerNavigator<AppRoutes>();

const AppNavigator = () => {
    return (
       <Navigator 

            screenOptions={{
                headerShown:false, 
                drawerType:'slide',
                drawerStyle: {width:30},
                overlayColor: 'transparent'
            }} 
            initialRouteName='bottomTabs' 
            drawerContent={(props)=><DrawerContent {...props} />}
        >
           <Screen name='bottomTabs' component={BottomTabNavigator}/>
           <Screen name='checkout' component={CheckOutScreen}/>
       </Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})

import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabRoute } from '../@types/navigation'
import {
    BottomTabsCart,
    BottomTabsFavourite,
    BottomTabsHome,
    BottomTabsProfile
} from '../screens/BottomTabs'
import BottomTabBar from '../components/BottomTabBar'
import { useDrawerStatus } from '@react-navigation/drawer'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const { Navigator, Screen } = createBottomTabNavigator<BottomTabRoute>()

const BottomTabNavigator = () => {
    const isDrawerOpen = useDrawerStatus() === 'open'
    const animatedValue = useSharedValue(1)

    useEffect(() => {
        animatedValue.value = withTiming(isDrawerOpen ? 0.6 :1 , {duration:250, easing:Easing.ease}) 
    }, [isDrawerOpen]);
    

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: animatedValue.value}]
    }))
    return (
        <Animated.View style={[animatedStyle, { flex: 1 }]}>
            <Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTabBar {...props} />} >
                <Screen name='home' component={BottomTabsHome} />
                <Screen name='favorite' component={BottomTabsFavourite} />
                <Screen name='profile' component={BottomTabsProfile} />
                <Screen name='cart' component={BottomTabsCart} />
            </Navigator>
        </Animated.View>
    )
}

export default BottomTabNavigator


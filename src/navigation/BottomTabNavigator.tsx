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
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useWindowDimensions, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

const { Navigator, Screen } = createBottomTabNavigator<BottomTabRoute>()

const BottomTabNavigator = () => {
    const isDrawerOpen = useDrawerStatus() === 'open'
    const animatedValue = useSharedValue(1)
    const {width} = useWindowDimensions()
    const {primary} = useTheme().colors

    useEffect(() => {
        animatedValue.value = withTiming(isDrawerOpen ? 0.7 :1 , {duration:250, easing:Easing.ease}) 
    }, [isDrawerOpen]);
    

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: animatedValue.value}],
        borderRadius: interpolate(animatedValue.value, [0.7, 1], [10, 0]),
        padding: interpolate(animatedValue.value, [0.7, 1], [20, 0]),
        overflow: 'hidden'
    }))
    return (
        <View style={{flex:1, backgroundColor:primary}}>
            <Animated.View style={[animatedStyle, { flex: 1, width, backgroundColor:'rgba(255,255,255,0.2)' }]}>
                <View style={[{flex:1, borderRadius: isDrawerOpen ? 10 : 0, overflow:'hidden'}]}>
                    <Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTabBar {...props} />} >
                        <Screen name='home' component={BottomTabsHome} />
                        <Screen name='favorite' component={BottomTabsFavourite} />
                        <Screen name='profile' component={BottomTabsProfile} />
                        <Screen name='cart' component={BottomTabsCart} />
                    </Navigator>
                </View>
            </Animated.View>
        </View>
    )
}

export default BottomTabNavigator


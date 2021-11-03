import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabRoute } from '../../@types/navigation';

const Home = () => {
    const navigation = useNavigation<BottomTabNavigationProp<BottomTabRoute, 'home'>>()
    //@ts-ignore
    const toggleDrawer = () =>navigation.toggleDrawer()
    return (
        <SafeAreaView style={styles.container}>
            <SimpleLineIcons name="menu" size={24} color="black" onPress={toggleDrawer}/>
            <Text></Text>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding:20
    }
})

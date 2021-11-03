import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SimpleLineIcons name="menu" size={24} color="black" />
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

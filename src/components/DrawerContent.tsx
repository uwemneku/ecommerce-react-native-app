import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DrawerContent:FC<DrawerContentComponentProps> = ({navigation, state}) => {
    return (
        <View style={{width:20}} >
            <Text>dfdfff</Text>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({})

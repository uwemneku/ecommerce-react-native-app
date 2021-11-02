import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

interface Props{
    color?: 'white' | 'primary' | 'secondary' | 'black'
    onPress: () => void
}
const AppButton:FC<Props> = ({color='white', children, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}  style={[styles.container, {backgroundColor:color}]} activeOpacity={0.8}>
            <AppText align='center' weight='bold' size='medium'>{children}</AppText>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        borderRadius: 10,
        paddingHorizontal:10,
        paddingVertical: 20,
        width: '70%'
    }
})

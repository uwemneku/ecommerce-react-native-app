import React, { FC } from 'react'
import { StyleSheet, Text, TextInputProps, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AppText from '../../../components/AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useTheme } from '@react-navigation/native';


interface Props{
    rightAdornment?: JSX.Element
    topIcon: JSX.Element
    topText: string
    InputProps?: Omit<TextInputProps, "style">
}

const Input:FC<Props> = ({rightAdornment, topIcon, InputProps, topText}) => {
    const { colors } = useTheme();
    return (
        <View style={{marginVertical:10}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {topIcon}
                <AppText size='small' style={{marginHorizontal:10}} color={colors.text}>{topText}</AppText>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} {...InputProps}  />
                {rightAdornment}
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'rgba(12, 12, 12, 0.3)',
        borderBottomWidth:1,
        marginVertical:10,
    },
    input:{
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 15,
        flex:1
    }
})

import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'

interface Props{
    weight?: 'light' | 'normal' | 'bold' | 'extraBold',
    color?: string,
    size? : 'small'| 'medium' | 'large' | 'extraLarge'
    align? : TextStyle['textAlign']
    style?: StyleProp<TextStyle>
}
const AppText:FC<Props> = ({color, weight, size='small', children, style, align='left'}) => {
    const fontSize:TextStyle['fontSize'] = 
        size === 'small'  ?  16 :
        size === 'medium' ?  18 :
        size === 'large'  ?  24 : 
                             70 ;

    const fontWeight:TextStyle['fontWeight'] = 
        weight === 'light'  ? '300':
        weight === 'normal' ? 'normal':
        weight === 'bold'   ? 'bold': 
                              '900'; 
                                            
    return (
            <Text style={[{color, fontSize, fontWeight, textAlign:align}, style]} >
                {children}
            </Text>
    )
}

export default AppText

const styles = StyleSheet.create({})

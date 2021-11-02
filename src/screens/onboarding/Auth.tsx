import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import BottomSheetModal from '../../components/BottomSheetModal'

const Auth = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppText color='white' weight='bold' size='extraLarge' style={{padding:20}}>
                Welcome{`\n`}back
           </AppText>
           <View style={styles.bottomSheet}>
               <AppText size='medium'>
                   Login
               </AppText>
                <AppButton onPress={()=>{}} >
                    Login
                </AppButton>
               <AppText size='small'>
                   Create Account
               </AppText>
           </View>
        </SafeAreaView>
    )
}

export default Auth

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5956E9',
      },
    bottomSheet:{
        flex:1,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        marginTop:30,
        paddingTop:20,
        paddingHorizontal: 20
    }
})

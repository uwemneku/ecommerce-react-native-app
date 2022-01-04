import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { authType } from '../../@types/slice'

const initial: authType = {name: '', email:'', isLoggedIn:false};

export const authSlice = createSlice({
    name:'authenticationSate',
    initialState: initial,
    reducers:{
        logIn: (state) => {
           return {...state, isLoggedIn:true}
        },
        logOut: (state) => {
            console.log('logout');
            
           return {...state, isLoggedIn:false}
        },
    }
})

export const {logIn, logOut} = authSlice.actions
export default authSlice.reducer;
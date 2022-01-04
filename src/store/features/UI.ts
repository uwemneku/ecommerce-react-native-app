import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initial = {isTabBarVisible: true};

export const uiSlice = createSlice({
    name:'UiSlice',
    initialState: initial,
    reducers:{
        showTabBar: (state) => {
           return {isTabBarVisible: true}
        },
        hideTabBar: (state) => {
           return {isTabBarVisible: false}
        },
    }
})

export const {hideTabBar, showTabBar} = uiSlice.actions
export default uiSlice.reducer;
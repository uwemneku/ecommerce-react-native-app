import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Slice/authentication'
export const store = configureStore({
    reducer: {
        authState: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import authReducer from './features/authentication'
import uiReducer from './features/products'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import { storeApi } from '../services'

const persistConfig = {
	key: 'root',
	version: 1,
	storage: AsyncStorage,
}

const reducer = combineReducers({
    authState: authReducer,
        products: uiReducer ,
		[storeApi.reducerPath]: storeApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(storeApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
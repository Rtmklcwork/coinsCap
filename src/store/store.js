import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../slices/userSlice'
import { coinCapApi } from '../components/coins/Coins';
import coinsReducer from '../slices/coinsSlice'
import walletReducer from '../slices/walletSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
    coins: coinsReducer,
    wallet: walletReducer,
    [coinCapApi.reducerPath]: coinCapApi.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE]
        }
    }).concat(coinCapApi.middleware),
})

export const persister = persistStore(store)
export default store;
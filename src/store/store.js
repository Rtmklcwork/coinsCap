import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice'
import { coinCapApi } from '../components/coins/Coins';
import coinsReducer from '../slices/coinsSlice'
import walletReducer from '../slices/walletSlice'


const rootReducer = combineReducers({
    user: userReducer,
    coins: coinsReducer,
    wallet: walletReducer,
    [coinCapApi.reducerPath]: coinCapApi.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinCapApi.middleware),
})
export default store;
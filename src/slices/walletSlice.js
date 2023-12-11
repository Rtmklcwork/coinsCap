import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],

}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {

        addCoin(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count = findItem.count + action.payload.count
            } else {
                state.items.push({
                    ...action.payload,
                    count: action.payload.count,
                })
            }
            state.totalPrice = state.items.reduce((acc, obj) => (obj.priceUsd * obj.count) + acc, 0)
        }
    }
})


export const { addCoin } = walletSlice.actions
export default walletSlice.reducer
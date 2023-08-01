import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  coins:[]
}

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        coinsData(state, action) {
            state.coins = { ...action.payload}
        }
    },
})

export const { coinsData } = coinsSlice.actions;
export default coinsSlice.reducer;

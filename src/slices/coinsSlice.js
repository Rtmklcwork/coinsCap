import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  coins:[],
  selected: [],
}

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        coinsData(state, action) {
            state.coins = { ...action.payload}
        },
        getSelectedCoin(state,action){
          state.selected = [...action.payload]
        }
    },
   
})

export const { coinsData, getSelectedCoin } = coinsSlice.actions;
export default coinsSlice.reducer;

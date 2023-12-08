import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  coins: [],
  selected: {},
  wallet: [],
}

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    coinsData(state, action) {
      state.coins = { ...action.payload }
    },
    getSelectedCoin(state, action) {
      state.selected = { ...action.payload }
    },
    getCoinInWallet(state, action) {
      state.wallet.push(action.payload)
    }
  },

})

export const { coinsData, getSelectedCoin, getCoinInWallet } = coinsSlice.actions;
export default coinsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import IPosition from "models/Position";
import PositionsAsync from "./positionsAsync";

interface IState {
  positions: IPosition[];
}

const initialState: IState = {
  positions: [],
}

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      // fetch positions
      .addCase(PositionsAsync.fetchPositions.fulfilled, (state, action) => {
        state.positions = action.payload.positions;
      })
  }
})

export const positionsActions = positionsSlice.actions;
export default positionsSlice.reducer;
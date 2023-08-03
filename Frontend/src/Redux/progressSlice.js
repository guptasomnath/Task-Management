import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
    name : "progress",
    initialState : false,
    reducers : {
        setProgressState : (state, action) => {
            return action.payload;
        }
    }
});

export const { setProgressState } = progressSlice.actions;
export default progressSlice.reducer;
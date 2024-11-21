import { configureStore } from "@reduxjs/toolkit";
import { poemsSlice } from "./poems/slice";

export const store = configureStore({
    reducer: {
        poems: poemsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
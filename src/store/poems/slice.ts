import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_STATE_POEMS, POEMS_SLICE_NAME } from "./constants";
import { PoemType } from "../../types/poems";

export const poemsSlice = createSlice({
    name: POEMS_SLICE_NAME,
    initialState: {
        ...DEFAULT_STATE_POEMS
    },
    reducers: {
        updateAllPoems: (store, action: PayloadAction<Array<PoemType>>) => {
            store.allPoems = action.payload
        },
        updateDetailPoem: (store, action: PayloadAction<PoemType>) => {
            store.detailPoemm = action.payload
        }
    }
})

export const { updateAllPoems, updateDetailPoem } = poemsSlice.actions
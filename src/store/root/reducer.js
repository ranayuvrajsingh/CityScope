import { createReducer } from "@reduxjs/toolkit";
import { initialDataState } from "./constants";

export const schema = {
    ...initialDataState,
  };
  
const initialState = schema;

const citiesReducer = createReducer(initialState, (builder) => {
    builder
        // .addCase('FETCHING_DATA', (state, action) => {
        //         state.loading = true
        //  })
        // .addCase('FETCHING_DATA_FAILED', (state, action) => {
        //         state.loading = false
        //  })
        // .addCase('ADD_DATA', (state, action) => {
        //     state.list.push(action.payload.data)
        //     state.loading = false
        // })
        .addCase('SET_DATA', (state, action) => {
                state.list = action.payload.data
                state.metadata = action.payload.metadata
                   
        })
        // .addCase('UPDATE_FILTERS', (state, action) => {
        //     state.filters = action.payload
        // })
})

export default citiesReducer;



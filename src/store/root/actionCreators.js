import { createAction } from "@reduxjs/toolkit";

// export const fetchingData = createAction('FETCHING_DATA');

// export const fetchingDataError = createAction('FETCHING_DATA_FAILED');

// export const addData = createAction('ADD_DATA');
// addData({payload}, reducerName)

// export const setData = createAction('SET_DATA');
// setData({payload}, reducerName)

// export const updateFilters = createAction('UPDATE_FILTERS');
// updateFilters(dispatch())


const setData = createAction('SET_DATA')
setData({text: 'hello world'})



import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from '../features/cities/citiesSlice';
import statesReducer from '../features/states/statesSlice';

const store = configureStore({
    reducer: {
        cities: citiesReducer,
        states: statesReducer,
      },
})

export default store;
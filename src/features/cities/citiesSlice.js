// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios";
// import { initialDataState } from "../../constants/initialState";
// import { useDispatch } from "react-redux";
// import { GetApis } from "../../services/apis/common";

//   export const getCities = createAsyncThunk(
//     'cities/getCities',
//     async (name, thunkAPI) => {
//       try {
//         // console.log(name);
//         // console.log(thunkAPI);
//         // console.log(thunkAPI.getState());
//         // thunkAPI.dispatch(openModal());
//         const response = await GetApis['cities'].get.data();
//         return citiesReceived(response);

//         // return response.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue('something went wrong');
//       }
//     }
//   );

// const citiesSlice = createSlice({
//     name: 'cities',
//     initialState: initialDataState,
//     reducers: {
//         citiesReceived(state, action) {
//             console.log('action.payload',action, state);
//             if (state.loading === true) {
//               state.loading = false
//               state.list = action.payload.data
//               console.log('states is here', state.list)
//               state.metadata = action.payload.metadata
//             }
//           },
//     },
//     extraReducers: (builder) => {
//         builder
//           .addCase(getCities.pending, (state) => {
//             state.loading = true;
//           })
//           .addCase(getCities.fulfilled, (state, action) => {
//             // console.log(action);
//             state.loading = false;
//             state.list = action.payload;
//             console.log('>>>>>>',state.list);
//           })
//           .addCase(getCities.rejected, (state, action) => {
//             console.log(action);
//             state.loading = false;
//           });
//       },
//   })

// export const { createCities, citiesReceived } = citiesSlice.actions;

// export default citiesSlice.reducer;

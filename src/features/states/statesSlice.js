// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios";
// import { initialDataState } from "../../constants/initialState";
// import { GetApis } from "../../services/apis/common";

//   export const getStates = createAsyncThunk(
//     'states/getStates',
//     async (name, thunkAPI) => {
//       try {
//         // console.log(name);
//         // console.log(thunkAPI);
//         // console.log(thunkAPI.getState());
//         // thunkAPI.dispatch(openModal());
//         const response = await GetApis['states'].get.data();
//        return  statesReceived(response);
//         // return resp.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue('something went wrong');
//       }
//     }
//   );

// const statesSlice = createSlice({
//     name: 'states',
//     initialState: initialDataState,
//     reducers: {
//         statesLoading(state, action) {
//             // Use a "state machine" approach for loading state instead of booleans
//             if (state.loading === true) {
//               state.loading = true
//             }
//           },
//         statesReceived(state, action) {
//             if (state.loading === true) {
//               state.loading = false
//               state.list = action.payload.data
//               state.metadata = action.payload.metadata
//             }
//           },
//     },
//     extraReducers: (builder) => {
//         builder
//           .addCase(getStates.pending, (state) => {
//             state.loading = true;
//           })
//           .addCase(getStates.fulfilled, (state, action) => {
//             // console.log(action);
//             state.loading = false;
//             state.list = action.payload;
//             console.log('>>>>>>',state.list);
//           })
//           .addCase(getStates.rejected, (state, action) => {
//             console.log(action);
//             state.loading = false;
//           });
//       },
//   })

// export const { createStates, statesReceived } = statesSlice.actions;

// export default statesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import * as joker_api from "../../api/joker.api";

const main_slice = createSlice({
  name: "main",
  initialState: {
    data: {},
    is_loading: false,
    error_msg: ""
  },
  reducers: {
    fetch_started: state => {
      state.is_loading = true;
      state.data = [];
      state.error_msg = "";
    },
    fetch_failed: (state, action) => {
      state.error_msg = action.payload;
      state.data = [];
      state.is_loading = false;
    },
    data_ready(state, action) {
      state.data = action.payload;
      state.is_loading = false;
      state.error_msg = "";
      //alternatively you can return an object...
      /* 
      return {
        ...state,
        data : action.payload,
        is_loading : false,
        error_msg : ''
      } 
      */
    }
  }
});

export default main_slice.reducer;

const { fetch_started, fetch_failed, data_ready } = main_slice.actions;

export const fetchData = () => async dispatch => {
  try {
    dispatch(fetch_started());
    const data = await joker_api.getData();
    console.log(data);
    if (!data) throw new Error("Quote data came back with no results");
    dispatch(data_ready(data));
  } catch (err) {
    dispatch(fetch_failed("The quotes data is unavailable at the moment"));
  }
};

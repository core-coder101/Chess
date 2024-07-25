import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  popup: false,
  uesr: null,
};


const createUserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPopup: (state, action) => {
      state.popup = !!action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    showPopup: (state, action) => {
      state.error = action.payload;
      state.popup = true;
    }
  },
  extraReducers: (builder) => {
    builder
  },
});

export const { setError, setPopup, showPopup, setUser } = createUserSlice.actions;

export default createUserSlice.reducer;

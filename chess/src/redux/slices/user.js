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
      // even though we will only pass true or false to this but I'm still writing '!!' to ensure this stays as a boolean type state
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
  },
});

export const { setError, setPopup, setUser } = createUserSlice.actions;

export default createUserSlice.reducer;

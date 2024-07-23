import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../../errorHandler";
import { handleResponse } from "../../responseHandler";

export const GetTeacherByID = createAsyncThunk(
  "GetTeacherByID",
  async (ID, { getState, rejectWithValue }) => {
    const state = getState();
    const CSRFToken = state.auth.CSRFToken;
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_HOST}api/GetTeacherData?ID=${ID}`,
        {
          headers: {
            "X-CSRF-TOKEN": CSRFToken,
            "Content-Type": "application/json",
            "API-TOKEN": import.meta.env.VITE_SECRET_KEY,
          },
        }
      );
      if (data.success == true) {
        return data;
      } else {
        return rejectWithValue(data.message || "Failed to load teacher");
      }
    } catch (error) {
      console.log(error.message);
      const errorMessage = handleError(error);
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  popup: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetTeacherByID.pending, (state) => {
        state.error = "Loading teacher's data";
        state.loading = true;
      })
      .addCase(GetTeacherByID.fulfilled, (state, action) => {
        state.teacherData = action.payload.data;
        state.loading = false;
      })
      .addCase(GetTeacherByID.rejected, (state, action) => {
        state.error = action.payload || "An Unknown Error Occurred";
        state.loading = false;
        state.popup = true;
      })
  },
});

export const { setError, setPopup } = createUserSlice.actions;

export default createUserSlice.reducer;

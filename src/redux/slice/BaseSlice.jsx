import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const initialState = {
  siteLoading: false,
  baseUrl : 'http://localhost:1337',
  // baseUrl : 'https://ecolifeapi.onrender.com',
  bannerData: [],
  categoryData: [],
  error: null,
};

export const fetchBanner = createAsyncThunk(
  "fetchBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}banners?populate=*`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const fetchCategory = createAsyncThunk(
  "fetchCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}categories?populate=*`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const BaseSlice = createSlice({
  name: "BaseSlice",
  initialState,
  erducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.pending, (state) => {
        state.siteLoading = true;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.siteLoading = false;
        state.bannerData = action.payload;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.siteLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.siteLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.siteLoading = false;
        state.categoryData = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.siteLoading = false;
        state.error = action.payload;
      });
  },
});

export default BaseSlice.reducer;

import checkResponse, { url } from "@/utils/chek-response";
import { IOptions } from "@/utils/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import build from "next/dist/build";

interface IListState {
  isAuthCheck: boolean;
  isAuth: boolean;
  dataRequest: boolean;
}
const initialState: IListState = {
  isAuthCheck: false,
  isAuth: false,
  dataRequest: false,
};

export const currentUserRequest = createAsyncThunk(
  `user/currentUserRequest`,
  async (_, { fulfillWithValue }) => {
    const data = await fetchWithRefresh(`${url}/check_token`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    if (data.success) {
      return fulfillWithValue(null);
    }
    throw new Error("Network response was not ok");
  }
);

const refreshToken = async () => {
  const res = await fetch(`${url}/token_refresh`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  if (!res.ok) {
    console.error("Error in response:", res.status, res.statusText);
    const err = await res.json();
    return await Promise.reject(err);
  }
};

export const fetchWithRefresh = async (url: string, options: IOptions) => {
  try {
    const res = await fetch(url, options as RequestInit);

    return await checkResponse(res);
  } catch (err: any) {
    if (err.message) {
      await refreshToken();

      const res = await fetch(url, options as RequestInit);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const authUserRequest = createAsyncThunk(
  `user/authUserRequest`,
  async (
    dataLogin: { username: string; password: string },
    { fulfillWithValue }
  ) => {
    const data = await fetch(`${url}/login_check`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataLogin),
    });

    return fulfillWithValue(data.ok);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUserRequest.pending, (state) => {
        state.dataRequest = true;
      })
      .addCase(authUserRequest.fulfilled, (state) => {
        state.dataRequest = false;
        state.isAuthCheck = true;
        state.isAuth = true;
      })
      .addCase(authUserRequest.rejected, (state) => {
        state.dataRequest = false;
      });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;

import checkResponse, { url } from "@/utils/chek-response";
import { IOptions } from "@/utils/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import build from "next/dist/build";

interface IListState {
  isAuthCheck: boolean;
  isAuth: boolean;
  dataLoading: boolean;
}
const initialState: IListState = {
  isAuthCheck: false,
  isAuth: false,
  dataLoading: false,
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
export const logoutUserRequest = createAsyncThunk(
  `user/logoutUserRequest `,
  async (_, { fulfillWithValue }) => {
    const data = await fetch(`${url}/logout`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
    });

    const responseData = await checkResponse(data);

    return fulfillWithValue(responseData);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(currentUserRequest.pending, (state) => {
      state.dataLoading = true;
    });
    builder
      .addCase(currentUserRequest.fulfilled, (state) => {
        state.isAuth = true;
        state.dataLoading = true;
      })

      .addCase(authUserRequest.fulfilled, (state, action) => {
        state.isAuth = action.payload;
        state.dataLoading = false;
      })

      .addCase(logoutUserRequest.fulfilled, (state) => {
        state.isAuth = false;
        state.dataLoading = false;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/fulfilled") && action.type.startsWith("user/"),
        (state) => {
          state.isAuthCheck = true;
          state.dataLoading = false;
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/rejected") && action.type.startsWith("user/"),
        (state) => {
          state.isAuthCheck = true;
          state.isAuth = false;
          state.dataLoading = false;
        }
      );
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;

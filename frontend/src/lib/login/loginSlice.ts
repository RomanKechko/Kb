import { createSlice } from "@reduxjs/toolkit";

interface IListState {
  data: null | string;
}
const initialState: IListState = {
  data: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    sendDataUser: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { sendDataUser } = loginSlice.actions;
export default loginSlice.reducer;

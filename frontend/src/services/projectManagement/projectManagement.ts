import checkResponse from "@/utils/chek-response";
import { IProject, IStatusSetProject } from "@/utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../../utils/chek-response";

interface IListState {
  status: IStatusSetProject | null;
  loading: boolean;
}

const initialState: IListState = {
  status: null,
  loading: false,
};
export const setProject = createAsyncThunk(
  "project/setProject",
  async (dataProject: IProject, { fulfillWithValue }) => {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataProject),
    });
    const responseData = await checkResponse(res);
    return fulfillWithValue(responseData);
  }
);

export const projectManagementSlice = createSlice({
  name: "projectManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setProject.fulfilled, (state, action) => {
      state.status = action.payload;
      state.loading = false;
    });
    builder.addCase(setProject.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const {} = projectManagementSlice.actions;
export default projectManagementSlice.reducer;

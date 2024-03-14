import checkResponse from "@/utils/chek-response";
import { IProject, IdataProject } from "@/utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../../utils/chek-response";

interface IListState {
  dataProjects: IdataProject | null;
  isDataCheck: boolean;
  downloadError: boolean;
}
const initialState: IListState = {
  dataProjects: null,
  isDataCheck: false,
  downloadError: false,
};

export const getProjects = createAsyncThunk(
  "rojects/getProjects",
  async (_, { fulfillWithValue }) => {
    const res = await fetch(`${url}
      `);
    const responseData = (await checkResponse(res)) as IdataProject;
    return fulfillWithValue(responseData);
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        state.dataProjects = action.payload;
        state.isDataCheck = true;
      })
      .addCase(getProjects.rejected, (state) => {
        state.downloadError = true;
      });
  },
});

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;

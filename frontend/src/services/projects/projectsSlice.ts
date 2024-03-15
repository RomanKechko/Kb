import checkResponse from "@/utils/chek-response";
import { IdataProject } from "@/utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from '@/utils/chek-response';

interface IListState {
  dataProjects: IdataProject[] | null;
  isDataCheck: boolean;
  downloadError: boolean;
}
const initialState: IListState = {
  dataProjects: null,
  isDataCheck: false,
  downloadError: false,
};

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (_, { fulfillWithValue }) => {
    const res = await fetch(`${url}/get_projects`, {
      method: "GET",
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    const data: IdataProject[] = await checkResponse(res)
    console.log(data)
    return fulfillWithValue(data);
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

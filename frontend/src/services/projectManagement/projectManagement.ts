import { IStatusSetProject } from "@/utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "@/utils/chek-response";
import { TProjectData } from '@/utils/type'

interface IListState {
  status: IStatusSetProject | null;
  loading: boolean;
}

const initialState: IListState = {
  status: null,
  loading: false,
};

export const setProject = createAsyncThunk(
  'projectManagement/setProject',
  async (dataProject: TProjectData) => {
    let formData = new FormData()
    for (const [key, value] of Object.entries(dataProject)) {
      if (typeof value === 'string') {
        formData.set(key, value);
      } else {
        for (const [key, file] of Object.entries(value)) {
          formData.set(key, file, file.name);
        }
      }
    }

    let xhrPost = new XMLHttpRequest();
    xhrPost.withCredentials = true;
    xhrPost.responseType = "json";
    xhrPost.open('POST', `${url}/set_project`);
    xhrPost.onload  = function() {
      const jsonResponse = xhrPost.response;
      console.log(jsonResponse)
    };
    xhrPost.send(formData)
  }
)

export const projectManagementSlice = createSlice({
  name: "projectManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setProject.fulfilled, (state) => {
      // state.status = action.payload
      state.loading = false;
    });
    builder.addCase(setProject.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const {} = projectManagementSlice.actions;
export default projectManagementSlice.reducer;

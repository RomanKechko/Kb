import { IStatusSetProject } from "@/utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import checkResponse, { url } from "@/utils/chek-response";
import { TProjectData } from "@/utils/type";
import { getProjects } from "../projects/projectsSlice";

interface IListState {
  status: IStatusSetProject | null;
  loading: boolean;
}

const initialState: IListState = {
  status: null,
  loading: false,
};

export const setProject = createAsyncThunk(
  "projectManagement/setProject",
  async (dataProject: TProjectData, { fulfillWithValue, dispatch }) => {
    let formData = new FormData();
    for (const [key, value] of Object.entries(dataProject)) {
      if (typeof value === "string") {
        formData.set(key, value);
      } else {
        for (const [key, file] of Object.entries(value)) {
          formData.set(key, file, file.name);
        }
      }
    }

    const res = await fetch(`${url}/set_project`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: formData,
    });

    const data = await checkResponse(res);
    data;
    dispatch(getProjects());
    return fulfillWithValue(data);
  }
);

export const delProject = createAsyncThunk(
  "projectManagement/setProject",
  async (id: number, { fulfillWithValue, dispatch }) => {
    const res = await fetch(`${url}/del_project`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    const data = await checkResponse(res);
    data;
    dispatch(getProjects());
    return fulfillWithValue(data);
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

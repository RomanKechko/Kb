import { IStatusSetProject } from "@/utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import checkResponse, { url } from "@/utils/chek-response";
import { TProjectData } from "@/utils/type";
import { getProjects } from "../projects/projectsSlice";

interface IListState {
  sendingStatus: boolean;
  loadingProgect: boolean;
  sendingError: boolean;
  deletionError: boolean;
}

const initialState: IListState = {
  sendingStatus: false,
  loadingProgect: false,
  sendingError: false,
  deletionError: false,
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

    dispatch(getProjects());
    return fulfillWithValue(data);
  }
);

export const delProject = createAsyncThunk(
  "projectManagement/delProject",
  async (id: number, { fulfillWithValue, dispatch }) => {
    const res = await fetch(`${url}/del_projec`, {
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

    dispatch(getProjects());
    return fulfillWithValue(data);
  }
);

export const projectManagementSlice = createSlice({
  name: "projectManagement",
  initialState,
  reducers: {
    serverResponseAgreement: (state) => {
      state.sendingStatus = false;
      state.sendingError = false;
      state.deletionError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setProject.pending, (state) => {
      state.loadingProgect = true;
    });

    builder.addCase(setProject.fulfilled, (state) => {
      state.sendingStatus = true;
      state.loadingProgect = false;
    });

    builder.addCase(setProject.rejected, (state) => {
      state.loadingProgect = false;
      state.sendingError = true;
    });
    builder.addCase(delProject.rejected, (state) => {
      state.deletionError = true;
    });
  },
});
export const { serverResponseAgreement } = projectManagementSlice.actions;
export default projectManagementSlice.reducer;

import { IStatusSetProject } from '@/utils/interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { url } from '@/utils/chek-response'

interface IListState {
  status: IStatusSetProject | null;
  loading: boolean;
}

const initialState: IListState = {
  status: null,
  loading: false,
}
export const setProject = createAsyncThunk(
  'projectManagement/setProject',
  async (dataProject: HTMLFormElement) => {
    let formData = new FormData(dataProject)

    let xhrPost = new XMLHttpRequest();
    xhrPost.withCredentials = true;
    xhrPost.responseType = "json";
    xhrPost.open('POST', `${url}/set_project`);
    xhrPost.onload  = function() {
      const jsonResponse = xhrPost.response;
      console.log(jsonResponse)
      //здесь можешь вызвать dispatch и применить ответ с сервера как нибудь,
      //с XMLHttpRequest к сожалению fulfillWithValue использовать не возможно(ну или я не понял как),
      //потомучто response доступен только в функции onload, но зато в будущем можно следить за прогрессом
      //загрузки файла
    };
    xhrPost.send(formData)
  }
)

export const projectManagementSlice = createSlice({
  name: 'projectManagement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setProject.pending, (state) => {
      state.loading = true
    })
    builder.addCase(setProject.fulfilled, (state) => {
      // state.status = action.payload
      state.loading = false
    })
    builder.addCase(setProject.rejected, (state) => {
      state.loading = false
    })
  },
})
export const {} = projectManagementSlice.actions
export default projectManagementSlice.reducer

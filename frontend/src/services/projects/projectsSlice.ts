import checkResponse from '@/utils/chek-response'
import { IData } from '@/utils/interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { url } from '@/utils/chek-response'
import { RootState } from '../store'

interface IListState {
  projectsData: IData[]
  isDataCheck: boolean
  downloadError: boolean
  orderData: { [key: number]: number }
  projectCategory: 'maf' | 'ordinary' | 'all'
}

const initialState: IListState = {
  projectsData: [],
  orderData: {},
  isDataCheck: false,
  downloadError: false,
  projectCategory: 'all'
}

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async (_, { fulfillWithValue }) => {
    const res = await fetch(`${url}/get_projects`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const data: IData[] = await checkResponse(res)
    function sortByOrder (a: IData, b: IData) {
      const diff = a.order - b.order
      return -diff
    }

    const sortedData = structuredClone(data).sort((a, b) => sortByOrder(a, b))
    return fulfillWithValue(sortedData)
  }
)

export const setOrder = createAsyncThunk(
  'projects/setOrder',
  async (_, { getState }) => {
    const state = getState() as RootState
    const res = await fetch(`${url}/change_order`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.projects.orderData)
    })
  }
)
export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    reorderProject: (state, action) => {
      const { from, to } = action.payload
      const [movedElement] = state.projectsData.splice(from, 1)
      state.projectsData.splice(to, 0, movedElement)
      const lengthArray = state.projectsData.length
      let data: { [key: number]: number } = {}
      for (let i = 0; i < lengthArray; i++) {
        state.projectsData[i].order = lengthArray - 1 - i
        data[state.projectsData[i].id] = lengthArray - 1 - i
      }
      state.orderData = data
    },
    projectFilter: (state, action) => {
      state.projectCategory = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projectsData = action.payload
        state.isDataCheck = true
      })
      .addCase(getProjects.rejected, state => {
        state.downloadError = true
        state.isDataCheck = false
      })
  }
})

export const { reorderProject, projectFilter } = projectsSlice.actions
export default projectsSlice.reducer

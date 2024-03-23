import { configureStore } from '@reduxjs/toolkit'

import userSlice from './user/userSlice'
import projectsSlice from './projects/projectsSlice'
import projectManagementSlice from './projectManagement/projectManagement'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      projects: projectsSlice,
      projectManagement: projectManagementSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

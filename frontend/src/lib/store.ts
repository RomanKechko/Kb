import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login/loginSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      login: loginSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

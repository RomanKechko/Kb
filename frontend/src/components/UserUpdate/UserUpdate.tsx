"use client";

import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { getProjects } from "@/services/projects/projectsSlice";
import { currentUserRequest } from "@/services/user/userSlice";
import React, { FC, useEffect } from "react";

interface IAuthProps {
  children: React.ReactNode;
}
const UserUpdateComponent: FC<IAuthProps> = ({ children }) => {
  const isAuthCheck = useAppSelector((state) => state.user.isAuthCheck);
  const dispatch = useAppDispatch();
  const isDataCheck = useAppSelector((state) => state.projects.isDataCheck);

  useEffect(() => {
    dispatch(currentUserRequest());
    dispatch(getProjects());
  }, []);

  return !isAuthCheck || !isDataCheck ? (
    <h2
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      loading...
    </h2>
  ) : (
    children
  );
};
export default UserUpdateComponent;

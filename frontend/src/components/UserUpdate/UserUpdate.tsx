"use client";

import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { currentUserRequest } from "@/services/user/userSlice";
import React, { FC, useEffect } from "react";

interface IAuthProps {
  children: React.ReactNode;
}
const UserUpdateComponent: FC<IAuthProps> = ({ children }) => {
  const isAuthCheck = useAppSelector((state) => state.user.isAuthCheck);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentUserRequest());
  }, []);

  return !isAuthCheck ? (
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

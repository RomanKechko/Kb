"use client";

import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { currentUserRequest } from "@/services/user/userSlice";
import { FC, useEffect, useState } from "react";

interface IAuthProps {
  children: React.ReactNode;
}
const UserUpdateComponent: FC<IAuthProps> = ({ children }) => {
  const isAuthCheck = useAppSelector((state) => state.user.isAuthCheck);
  const auth = useAppSelector((state) => state.user.isAuth);
  const dispatch = useAppDispatch();
  const dataLoading = useAppSelector((state) => state.user.dataLoading);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(currentUserRequest());
  }, []);

  useEffect(() => {
    if (dataLoading) {
      setLoading(false);
    }
  }, [dataLoading]);

  return Loading ? (
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
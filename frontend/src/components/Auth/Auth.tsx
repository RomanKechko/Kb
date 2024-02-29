"use client";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { currentUserRequest } from "@/services/user/userSlice";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

interface IAuthProps {
  children: any;
  redirectUrl?: string;
  isAuthPage?: boolean;
}

const Auth: FC<IAuthProps> = ({
  children,
  redirectUrl,
  isAuthPage = false,
}) => {
  const dispatch = useAppDispatch();
  const isAuthCheck = useAppSelector((state) => state.user.isAuthCheck);
  const auth = useAppSelector((state) => state.user.isAuth);
  const router = useRouter();

  useEffect(() => {
    dispatch(currentUserRequest());
  }, []);

  useEffect(() => {
    if (isAuthPage === auth && isAuthCheck) {
      router.push(redirectUrl!);
    }
  }, [auth, isAuthCheck]);

  if (!isAuthCheck || isAuthPage === auth) {
    return (
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
    );
  }

  if (redirectUrl !== "/control" && redirectUrl !== "/project-addition") {
    return children;
  }
  return children;
};
export default Auth;

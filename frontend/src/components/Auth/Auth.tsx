"use client";
import { useAppSelector } from "@/services/hooks";
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
  const isAuthCheck = useAppSelector((state) => state.user.isAuthCheck);
  const auth = useAppSelector((state) => state.user.isAuth);
  const router = useRouter();

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

  return children;
};
export default Auth;

import Auth from "@/components/Auth/Auth";
import Login from "@/components/Login/Login";
import { FC } from "react";

const ProjectPage: FC = () => {
  return (
    <Auth redirectUrl="/project-addition" isAuthPage={true}>
      <Login />
    </Auth>
  );
};

export default ProjectPage;

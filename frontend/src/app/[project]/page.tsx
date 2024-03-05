import { FC } from "react";
import style from "./page.module.css";
import ProjectComponent from "@/components/Project/Project";

const ProjectPage: FC = () => {
  return (
    <>
      <main className={style.container}>
        <ProjectComponent />
      </main>
    </>
  );
};

export default ProjectPage;

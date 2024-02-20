import { FC } from "react";
import style from "./page.module.css";
import ProjectComponent from "@/components/Project/Project";

const ProjectPage: FC = () => {
  return (
    <>
      <section className={style.container}>
        <ProjectComponent />
      </section>
    </>
  );
};

export default ProjectPage;

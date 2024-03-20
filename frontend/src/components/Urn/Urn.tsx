"use client";
import { useAppSelector } from "@/services/hooks";
import style from "./Urn.module.css";
import { useState } from "react";
import ModalMessage from "../ModalMessage/ModalMessage";

interface IUrnComponentProps {
  id: number;
}

function UrnComponent({ id }: IUrnComponentProps) {
  const [deleteProject, setDeleteProject] = useState(false);

  const auth = useAppSelector((state) => state.user.isAuth);

  return (
    auth && (
      <>
        <button
          className={style.urn}
          onClick={() => setDeleteProject(true)}
        ></button>
        {deleteProject && (
          <ModalMessage
            deleteProject={deleteProject}
            id={id}
            setDeleteProject={setDeleteProject}
          />
        )}
      </>
    )
  );
}
export default UrnComponent;

"use client";
import { useAppSelector } from "@/services/hooks";
import style from "./Urn.module.css";
import { useEffect, useState } from "react";
import ModalMessage from "../../../ModalMessage/ModalMessage";

interface IUrnComponentProps {
  id: number;
}

function UrnComponent({ id }: IUrnComponentProps) {
  const [deleteProject, setDeleteProject] = useState(false);
  const auth = useAppSelector((state) => state.user.isAuth);
  const [deletionError, setDeletionError] = useState(false);
  console.log("deleteProject: ", deleteProject);
  const Error = useAppSelector(
    (state) => state.projectManagement.deletionError
  );
  console.log("Error: ", Error);
  useEffect(() => {
    if (Error === true && deleteProject === true) {
      setDeletionError(true);
    } else {
      setDeletionError(false);
    }
  }, [deleteProject, Error]);
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
            deletionError={deletionError}
          />
        )}
      </>
    )
  );
}
export default UrnComponent;

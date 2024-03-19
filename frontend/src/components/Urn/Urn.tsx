"use client";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import style from "./Urn.module.css";
import { delProject } from "@/services/projectManagement/projectManagement";

interface IUrnComponentProps {
  id: number;
}

function UrnComponent({ id }: IUrnComponentProps) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.user.isAuth);
  function deleteElement() {
    dispatch(delProject(id));
    (" Не удалил, хах");
  }

  return (
    auth && <button className={style.urn} onClick={deleteElement}></button>
  );
}
export default UrnComponent;

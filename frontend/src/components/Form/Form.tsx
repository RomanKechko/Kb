import style from "./Form.module.css";
import React, { FC, useRef, useState } from "react";
import { TProjectData } from "@/utils/type";
import FormTextInputs from "@/components/Form/FormTextInputs/FormTextInputs";
import FormFileInputs from "@/components/Form/FormFileInputs/FormFileInputs";
import { useAppDispatch } from "@/services/hooks";
import { setProject } from "@/services/projectManagement/projectManagement";
import Buttons from "./Buttons/Buttons";

interface IFromProps {
  logout: () => void;
}

const Form: FC<IFromProps> = ({ logout }) => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [projectData, setProjectData] = useState<TProjectData>({
    name: "",
    price: "",
    deadline: "",
    complexity: "",
    description: "",
    images: {},
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, price, deadline, complexity, description, images } =
      projectData;
    if (
      !name ||
      !price ||
      !deadline ||
      !complexity ||
      !description ||
      !images
    ) {
      return;
    }
    if (Object.values(images).length === 0) {
      console.log("Необходимо загрузить хотябы один файл");
      return;
    }
    if (
      Object.keys(images).includes("gif-image") !==
      Object.keys(images).includes("gif")
    ) {
      console.log("Отсутствует gif или картинка для gif");
      return;
    }
    if (formRef.current) {
      dispatch(setProject(formRef.current));
    }
  }

  function dataEntry(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  }

  function handleFileInput(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.[0];
      if (file) {
        setProjectData((prevState) => ({
          ...prevState,
          images: { ...prevState.images, [key]: file },
        }));
      }
    };
  }

  return (
    <form onSubmit={handleSubmit} className={style.form} ref={formRef}>
      <div className={style.container_form}>
        <ul className={style.form__inputs}>
          <FormTextInputs projectData={projectData} dataEntry={dataEntry} />
        </ul>
        <ul
          className={style.form__inputs}
          style={{
            counterReset: `list-number 5`,
          }}
        >
          <FormFileInputs handleFileInput={handleFileInput} />
        </ul>
      </div>
      <Buttons logout={logout} />
    </form>
  );
};

export default Form;

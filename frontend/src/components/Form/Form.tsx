import style from "./Form.module.css";
import React, { FC, useEffect, useState } from "react";
import { TProjectData } from "@/utils/type";
import FormTextInputs from "@/components/Form/FormTextInputs/FormTextInputs";
import FormFileInputs from "@/components/Form/FormFileInputs/FormFileInputs";
import Buttons from "./Buttons/Buttons";

interface IForm {
  logout: () => void;
}
const Form: FC<IForm> = ({ logout }) => {
  const [projectData, setProjectData] = useState<TProjectData>({
    name: "",
    price: "",
    deadline: "",
    complexity: "",
    description: "",
    images: {},
  });
  const [missingGif, setMissingGif] = useState(false);
  const [missingFile, setMissingFile] = useState(false);

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
      setMissingFile(true);
      return;
    }
    if (
      Object.keys(images).includes("gif-image") !==
      Object.keys(images).includes("gif")
    ) {
      setMissingGif(true);
      return;
    }
    console.log(123);
  }
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (missingGif) {
      timerId = setTimeout(() => setMissingGif(false), 2000);
    }
    if (missingFile) {
      timerId = setTimeout(() => setMissingFile(false), 2000);
    }
    return () => clearTimeout(timerId);
  }, [missingGif, missingFile]);

  function dataEntry(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
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
          <FormFileInputs setProjectData={setProjectData} />
        </ul>
      </div>
      <Buttons
        logout={logout}
        missingGif={missingGif}
        missingFile={missingFile}
      />
    </form>
  );
};

export default Form;

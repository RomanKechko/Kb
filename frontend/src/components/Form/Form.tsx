import style from "./Form.module.css";
import React, { FC, useEffect, useState } from "react";
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
  const [projectData, setProjectData] = useState<TProjectData>({
    name: "",
    price: "",
    deadline: "",
    complexity: "",
    description: "",
    images: {},
  });
  const [missingGif, setMissingGif] = useState(false);
  const [mainPicture, setMainPicture] = useState(false);
  const [customValidity, setCustomValidity] = useState("");
  console.log(projectData);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, price, deadline, complexity, description, images } =
      projectData;
    if (!name || !price || !deadline || !complexity || !description) {
      const requiredFields = [
        "description",
        "complexity",
        "deadline",
        "price",
        "name",
      ];
      requiredFields.forEach((item, index) => {
        `Element at index ${index}: ${item}`;
        if (projectData[item] === "") {
          `Setting custom validity for ${item}`;
          setCustomValidity(item);
        }
      });

      return;
    }

    if (!Object.keys(images).includes("image_1")) {
      setMainPicture(true);
      return;
    }
    if (
      Object.keys(images).includes("gif-image") !==
      Object.keys(images).includes("gif")
    ) {
      setMissingGif(true);
      return;
    }

    dispatch(setProject(projectData));

    setProjectData({
      name: "",
      price: "",
      deadline: "",
      complexity: "",
      description: "",
      images: {},
    });
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

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (missingGif) {
      timerId = setTimeout(() => setMissingGif(false), 2000);
    }
    if (mainPicture) {
      timerId = setTimeout(() => setMainPicture(false), 2000);
    }
    if (customValidity) {
      timerId = setTimeout(() => setCustomValidity(""), 1000);
    }
    return () => clearTimeout(timerId);
  }, [, customValidity, missingGif, mainPicture]);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.container_form}>
        <ul className={style.form__inputs}>
          <FormTextInputs
            projectData={projectData}
            dataEntry={dataEntry}
            customValidity={customValidity}
          />
        </ul>
        <ul
          className={style.form__inputs}
          style={{
            counterReset: `list-number 5`,
          }}
        >
          <FormFileInputs
            setProjectData={setProjectData}
            projectData={projectData}
          />
        </ul>
      </div>
      <Buttons
        logout={logout}
        missingGif={missingGif}
        mainPicture={mainPicture}
        customValidity={customValidity}
      />
    </form>
  );
};

export default Form;

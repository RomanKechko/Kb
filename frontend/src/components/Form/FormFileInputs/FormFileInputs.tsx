import React, { FC } from "react";
import FormFileInput from "@/components/Form/FormFileInput/FormFileInput";
import { TProjectData } from "@/utils/type";

interface IFormFileInputProps {
  setProjectData: React.Dispatch<React.SetStateAction<TProjectData>>;
  projectData: TProjectData;
}
const FormFileInputs: FC<IFormFileInputProps> = ({
  setProjectData,
  projectData,
}) => {
  return (
    <>
      <FormFileInput
        title={"Добавить видео"}
        id={"video"}
        name={"video"}
        accept={".mp4, .avi"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
      <FormFileInput
        title={"Добавить первое изображение"}
        id={"image_1"}
        name={"image_1"}
        accept={".jpeg, .png"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
      <FormFileInput
        title={"Добавить второе изображение"}
        id={"image_2"}
        name={"image_2"}
        accept={".jpeg, .png"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
      <FormFileInput
        title={"Добавить третье изображение"}
        id={"image_3"}
        name={"image_3"}
        accept={".jpeg, .png"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
      <FormFileInput
        title={"Добавить gif"}
        id={"gif"}
        name={"gif"}
        accept={".gif"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
      <FormFileInput
        title={"Добавить картинку гифки"}
        id={"gif-image"}
        name={"gif-image"}
        accept={".jpeg, .png"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
      <FormFileInput
        title={"Добавить pdf"}
        id={"pdf"}
        name={"pdf"}
        accept={".pdf"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
      <FormFileInput
        title={"Добавить word"}
        id={"word"}
        name={"word"}
        accept={".doc, .docx"}
        setProjectData={setProjectData}
        projectData={projectData}
      />
    </>
  );
};
export default FormFileInputs;

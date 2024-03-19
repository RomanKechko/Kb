import React, { FC } from "react";
import FormInput from "@/components/Form/FormInput/FormInput";
import FormTextarea from "@/components/Form/FormTextarea/FormTextarea";
import { TProjectData } from "@/utils/type";

interface IFormFileInputProps {
  projectData: TProjectData;
  dataEntry: React.ChangeEventHandler;
  customValidity: string;
}

const FormTextInputs: FC<IFormFileInputProps> = ({
  dataEntry,
  projectData,
  customValidity,
}) => {
  return (
    <>
      <FormInput
        id={"name"}
        name={"name"}
        onChange={dataEntry}
        value={projectData.name}
        title={"Наименование"}
        customValidity={customValidity}
      />
      <FormInput
        id={"price"}
        name={"price"}
        onChange={dataEntry}
        value={projectData.price}
        title={"Стоимость"}
        customValidity={customValidity}
      />
      <FormInput
        id={"deadline"}
        name={"deadline"}
        onChange={dataEntry}
        value={projectData.deadline}
        title={"Срок выполнения"}
        customValidity={customValidity}
      />
      <FormInput
        id={"complexity"}
        name={"complexity"}
        onChange={dataEntry}
        value={projectData.complexity}
        title={"Сложность"}
        customValidity={customValidity}
      />
      <FormTextarea
        id={"description"}
        name={"description"}
        onChange={dataEntry}
        value={projectData.description}
        title={"Описание"}
        customValidity={customValidity}
      />
    </>
  );
};

export default FormTextInputs;

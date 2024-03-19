import { TProjectData, TImages } from "@/utils/type";
import style from "./FormFileInput.module.css";
import React, { FC, useEffect, useState } from "react";

interface IFormFileInputProps {
  title: string;
  id: string;
  name: string;
  accept: string;
  setProjectData: React.Dispatch<React.SetStateAction<TProjectData>>;
  projectData: TProjectData;
}

const FormFileInput: FC<IFormFileInputProps> = ({
  title,
  name,
  accept,
  id,
  setProjectData,
  projectData,
}: IFormFileInputProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [formatError, setFormatError] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  function handleFileInput(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.[0];

      if (file) {
        setProjectData((prevState) => ({
          ...prevState,
          images: { ...prevState.images, [key]: file },
        }));
        setTypeFile(file.name);
      }
    };
  }

  function handleDrag(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragActive(true);
  }

  function handleLeave(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragActive(false);
  }

  enum AllowedMimeTypes {
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    MP4 = "video/mp4",
    AVI = "video/x-msvideo",
    PDF = "application/pdf",
    DOC = "application/msword",
    DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  }

  function handleDrop(key: string, e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];

    if (file) {
      const allowedFormats = accept.split(",").map((format) => format.trim());
      const allowedMIMETypes = allowedFormats.map((format) => {
        switch (format) {
          case ".jpeg":
          case ".jpg":
            return AllowedMimeTypes.JPEG;
          case ".png":
            return AllowedMimeTypes.PNG;
          case ".gif":
            return AllowedMimeTypes.GIF;
          case ".mp4":
            return AllowedMimeTypes.MP4;
          case ".avi":
            return AllowedMimeTypes.AVI;
          case ".pdf":
            return AllowedMimeTypes.PDF;
          case ".doc":
            return AllowedMimeTypes.DOC;
          case ".docx":
            return AllowedMimeTypes.DOCX;
          default:
            return "";
        }
      });
      if (allowedMIMETypes.includes(file.type as AllowedMimeTypes)) {
        setProjectData((prevState) => ({
          ...prevState,
          images: { ...prevState.images, [key]: file },
        }));
        setTypeFile(file.name);
      } else {
        setFormatError(true);
      }
    }
  }
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (formatError) {
      timerId = setTimeout(() => setFormatError(false), 2000);
    }
    return () => clearTimeout(timerId);
  }, [formatError]);

  useEffect(() => {
    if (Object.keys(projectData.images).length === 0) {
      setTypeFile("");
    }
  }, [projectData]);

  function handleDeleteFile() {
    for (const key in projectData.images) {
      if (projectData.images[key as keyof TImages]?.name === typeFile) {
        const updatedImages = { ...projectData.images };
        delete updatedImages[key as keyof TImages];
        setProjectData((prevState) => ({
          ...prevState,
          images: updatedImages,
        }));
      }
    }
    setTypeFile("");
  }

  return (
    <li className={style.list}>
      <label
        htmlFor={id}
        className={`${style.form_label} ${
          dragActive ? style.from_label_active : ""
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleLeave}
        onDrop={(e) => handleDrop(name, e)}
      >
        <p className={style.form_text}>{title}:</p>
        <div className={style.form_container}>
          {typeFile ? (
            <>
              <span className={style.form_span_active}>Файл добавлен</span>
            </>
          ) : (
            <span className={style.form_span}>Загрузите файл</span>
          )}
          <input
            id={id}
            name={name}
            type="file"
            accept={accept}
            onChange={handleFileInput(name)}
            className={style.form__input}
          />{" "}
          {typeFile && <p className={style.name_file}>{typeFile}</p>}
        </div>
        {formatError && (
          <p className={style.form_error}>Данный формат не подходит</p>
        )}
      </label>
      {typeFile && (
        <div onClick={handleDeleteFile} className={style.form_urn}></div>
      )}
    </li>
  );
};

export default FormFileInput;

"use client";

import { FC, useState } from "react";
import style from "./ProjectAddition.module.css";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { logoutUserRequest } from "@/services/user/userSlice";
import { TProjectData } from "@/utils/type";

const ProjectAddition: FC = () => {
  const [projectData, setProjectData] = useState<TProjectData>({
    name: "",
    price: "",
    deadline: "",
    complexity: "",
    description: "",
    images: {},
  });
  console.log(projectData);
  const router = useRouter();
  const dispatch = useAppDispatch();
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
  }
  console.log(projectData);
  function logout() {
    dispatch(logoutUserRequest());
    router.push("/");
  }

  function dataEntry(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <>
      <div className={style.container}>
        <h1 className={style.title}>Внести новый проект</h1>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.container_form}>
            <div className={style.labels}>
              <label htmlFor="name" className={style.label}>
                1. Наименование:
              </label>
              <label htmlFor="price" className={style.label}>
                2. Стоимость:
              </label>
              <label htmlFor="deadline" className={style.label}>
                3. Срок выполнения:
              </label>
              <label htmlFor="complexity" className={style.label}>
                4. Сложность:
              </label>
              <label htmlFor="description" className={style.label}>
                5. Описание:
              </label>
            </div>
            <div className={style.inputs}>
              <input
                id="name"
                name="name"
                value={projectData.name}
                onChange={dataEntry}
                className={style.input}
                autoComplete="off"
              />

              <input
                id="price"
                name="price"
                value={projectData.price}
                onChange={dataEntry}
                className={style.input}
                autoComplete="off"
              />
              <input
                id="deadline"
                name="deadline"
                value={projectData.deadline}
                onChange={dataEntry}
                className={style.input}
                autoComplete="off"
              />
              <input
                id="complexity"
                name="complexity"
                value={projectData.complexity}
                onChange={dataEntry}
                className={style.input}
                autoComplete="off"
              />
              <textarea
                name="description"
                id="description"
                className={style.textarea}
                value={projectData.description}
                onChange={dataEntry}
                autoComplete="off"
              ></textarea>
            </div>
            <div className={style.labels}>
              <label htmlFor="video" className={style.label}>
                9. Добавить видео:
              </label>
              <label htmlFor="image-1" className={style.label}>
                6. Добавить первое изображение:
              </label>
              <label htmlFor="image-2" className={style.label}>
                7. Добавить второе изображение:
              </label>
              <label htmlFor="image-3" className={style.label}>
                8. Добавить третье изображение:
              </label>
              <label htmlFor="gif" className={style.label}>
                10. Добавить gif:
              </label>
              <label htmlFor="gif-image" className={style.label}>
                10. Добавить картинку гифки:
              </label>
              <label htmlFor="pdf" className={style.label}>
                11. Добавить pdf:
              </label>
              <label htmlFor="word" className={style.label}>
                12. Добавить word:
              </label>
            </div>
            <div className={style.inputs}>
              <input
                id="video"
                type="file"
                accept=".mp4, avi"
                onChange={handleFileInput("video")}
                className={style.input_file}
              />
              <input
                id="image_1"
                type="file"
                accept="image/*"
                onChange={handleFileInput("image_1")}
                className={style.input_file}
              />
              <input
                id="image_2"
                type="file"
                accept="image/*"
                onChange={handleFileInput("image_2")}
                className={style.input_file}
              />
              <input
                id="image_3"
                type="file"
                accept="image/*"
                onChange={handleFileInput("image_3")}
                className={style.input_file}
              />
              <input
                id="gif"
                type="file"
                accept=".gif"
                onChange={handleFileInput("gif")}
                className={style.input_file}
              />
              <input
                id="gif-image"
                type="file"
                accept="image/*"
                onChange={handleFileInput("gif-image")}
                className={style.input_file}
              />
              <input
                id="pdf"
                type="file"
                accept=".pdf"
                onChange={handleFileInput("pdf")}
                className={style.input_file}
              />
              <input
                id="word"
                type="file"
                accept=".doc, .docx"
                onChange={handleFileInput("word")}
                className={style.input_file}
              />
            </div>
          </div>
          <button type="submit" className={style.button}>
            Отправить данные
          </button>
        </form>
      </div>
      <button type="button" onClick={logout} className={style.button_exit}>
        ВЫЙТИ ИЗ КАБИНЕТА
      </button>
      {/*  <p className={style.office}>В разработке</p> */}
    </>
  );
};
export default ProjectAddition;

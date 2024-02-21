"use client";

import { useState } from "react";
import style from "./ProjectAddition.module.css";
const ProjectAddition = () => {
  const [projectData, setProjectData] = useState({
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
  return (
    <div className={style.conteiner}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.labels}>
          <label htmlFor="name" className={style.label}>
            Наименование:
          </label>
          <label htmlFor="price" className={style.label}>
            Стоимость:
          </label>

          <label htmlFor="deadline" className={style.label}>
            Срок выполнения:
          </label>
          <label htmlFor="complexity" className={style.label}>
            Сложность:
          </label>
          <label htmlFor="description" className={style.label}>
            Описание:
          </label>
          <label className={style.label}>Добавить изображение:</label>
        </div>
        <div className={style.inputs}>
          <input
            id="name"
            name="name"
            value={projectData.name}
            onChange={dataEntry}
            className={style.input}
          />

          <input
            id="price"
            name="price"
            value={projectData.price}
            onChange={dataEntry}
            className={style.input}
          />
          <input
            id="deadline"
            name="deadline"
            value={projectData.deadline}
            onChange={dataEntry}
            className={style.input}
          />
          <input
            id="complexity"
            name="complexity"
            value={projectData.complexity}
            onChange={dataEntry}
            className={style.input}
          />
          <textarea
            name="description"
            id="description"
            value={projectData.description}
            onChange={dataEntry}
          ></textarea>
        </div>
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
    </div>
  );
};
export default ProjectAddition;

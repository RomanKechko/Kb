"use client";

import { FC } from "react";
import style from "./Product.module.css";
import Link from "next/link";
import { useAppSelector } from "@/services/hooks";
import UrnComponent from "./Urn/Urn";
import { IData } from "@/utils/interface";

const ProductComponent: FC = () => {
  const data: IData[] = useAppSelector(
    (state) => state.projects?.projectsData as IData[]
  );

  return (
    <>
      {data?.map((item: IData) => (
        <li className={style.list} key={item._id}>
          <Link href={`/${item._id} `} className={style.link}>
            <img
              src={item.images.image_1}
              alt={item.name}
              className={style.image}
            />
            <p className={style.description}>{item.name}</p>
          </Link>
          <UrnComponent id={item.id} />
        </li>
      ))}
    </>
  );
};

export default ProductComponent;

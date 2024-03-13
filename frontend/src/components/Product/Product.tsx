import { FC } from "react";
import style from "./Product.module.css";
import { data } from "@/data.js";
import { Ingredient } from "@/utils/type";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/services/hooks";
import UrnComponent from "../Urn/Urn";

const ProductComponent: FC = () => {
  return (
    <>
      {data.map((item: Ingredient) => (
        <li className={style.list} key={item._id}>
          <Link href={`/${item._id} `} className={style.link}>
            <Image
              src={Object.values(item.images)[0] as string}
              alt={item._id}
              className={style.image}
              width={800}
              height={800}
            />
            <p className={style.description}>{item.name}</p>
          </Link>
          <UrnComponent />
        </li>
      ))}
    </>
  );
};

export default ProductComponent;

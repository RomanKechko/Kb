import { FC } from "react";
import style from "./Product.module.css";
import { data } from "@/data.js";
import { Ingredient } from "@/utils/type";
import Link from "next/link";

const ProductComponent: FC = () => {
  return (
    <>
      {data.map((item: Ingredient) => (
        <li className={style.list} key={item._id}>
          <Link href={`/${item._id}`} className={style.link}>
            <img
              src={Object.values(item.images)[0] as string}
              alt={item._id}
              className={style.image}
            />
            <p className={style.description}>{item.name}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default ProductComponent;

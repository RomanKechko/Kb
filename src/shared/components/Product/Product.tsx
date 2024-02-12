import React, { FC } from "react";
import { hot } from "react-hot-loader/root";
import style from "./Product.css";
import { Link } from "react-router-dom";
import { data } from "../../data.js";

import { Ingredient } from "../../utils/type";


const ProductComponent: FC = () => {
  return (
    <>
      {data.map((item: Ingredient) => (
        <li className={style.list} key={item._id}>
          <Link to={`/product/${item._id}`} className={style.link}>
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

export const Product = hot(ProductComponent);

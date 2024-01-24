import React from "react";
import { hot } from "react-hot-loader/root";
import style from "./Product.css";
import { Link } from "react-router-dom";
import { data } from "../../data.js";
function ProductComponent() {
  return (
    <>
      {data.map((item: any, index: number) => (
        <li className={style.list} key={item._id}>
          <Link to={`/product/${index}`} className={style.link}>
            <img src={item.image} alt="" className={style.image} />
            <p className={style.description}>{item.name}</p>
          </Link>
        </li>
      ))}
    </>
  );
}

export const Product = hot(ProductComponent);

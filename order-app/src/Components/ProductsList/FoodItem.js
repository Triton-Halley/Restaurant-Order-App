import React, { useContext, useRef } from "react";

import Styles from "./FoodItem.module.css";
import AddToCartContext from "../../Context/AddToCart";
const FoodItem = (props) => {
  const ctx = useContext(AddToCartContext);
  const Amount = useRef();
  const SubmitHandler = (e) => {
    e.preventDefault();
    ctx.AddOrder({
      id: props.id,
      name: props.name,
      price: props.price,
      Amount: Amount.current.value,
    });
  };
  return (
    <div className={Styles["Item-container"]}>
      <div>
        <p className={Styles.name}>{props.name}</p>
        <p className={Styles.desc}>{props.description}</p>
        <p className={Styles.price}>${props.price}</p>
      </div>
      <div>
        <form onSubmit={SubmitHandler} className={Styles["form-Container"]}>
          <label>Amount</label>
          <input ref={Amount} type="number" min={1} max={100} />
          <button className={Styles.AddBtn}>+Add</button>
        </form>
      </div>
    </div>
  );
};
export default FoodItem;

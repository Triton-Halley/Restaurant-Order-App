import React, { useContext, useState } from "react";

import Styles from "./FoodItem.module.css";
import AddToCartContext from "../../Context/AddToCart";
const FoodItem = (props) => {
  const [amountValue, setAmountValue] = useState(1);
  const ctx = useContext(AddToCartContext);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (amountValue > 0) {
      ctx.AddOrder({
        id: props.id,
        name: props.name,
        price: props.price,
        Amount: amountValue,
      });
    }
  };
  const onChangeInputHandler = (e) => {
    setAmountValue(e.target.value);
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
          <input
            type="number"
            onChange={onChangeInputHandler}
            value={amountValue}
            min={1}
            max={100}
          />
          <button className={Styles.AddBtn}>+Add</button>
        </form>
      </div>
    </div>
  );
};
export default FoodItem;

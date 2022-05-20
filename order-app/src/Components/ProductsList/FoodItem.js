import React from "react";

import Styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  return (
    <div className={Styles["Item-container"]}>
      <div>
        <p className={Styles.name}>{props.name}</p>
        <p className={Styles.desc}>{props.description}</p>
        <p className={Styles.price}>${props.price}</p>
      </div>
      <div>
        <form className={Styles["form-Container"]}>
          <label>Amount</label>
          <input type="number" min={1} max={100} />
          <button className={Styles.AddBtn}>+Add</button>
        </form>
      </div>
    </div>
  );
};
export default FoodItem;

import React from "react";

import Styles from "./OrderItem.module.css";

const OrderItem = (props) => {
  const AddOrder = (e) => {
    props.addItem({
      id: props.order.id,
      name: props.name,
      price: props.price,
      Amount: "1",
    });
  };
  const RemoveOrder = (e) => {};
  return (
    <div className={Styles.itemContainer}>
      <div className={Styles.sec1}>
        <div>
          <p className={Styles.name}>{props.name}</p>
        </div>
        <div className={Styles.secPrice}>
          <p className={Styles.price}>${props.price}</p>
          <div className={Styles.Amount}>
            x<span>{props.Amount}</span>
          </div>
        </div>
      </div>
      <div className={Styles.buttons}>
        <button onClick={AddOrder}>+</button>
        <button onClick={RemoveOrder}>-</button>
      </div>
    </div>
  );
};

export default OrderItem;

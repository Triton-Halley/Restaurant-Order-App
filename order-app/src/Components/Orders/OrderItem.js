import React, { useContext } from "react";
import AddToCartContext from "../../Context/AddToCart";

import Styles from "./OrderItem.module.css";

const OrderItem = (props) => {
  const ctx = useContext(AddToCartContext);
  const AddOrder = (e) => {
    props.order.Amount++;

    ctx.Update(props.order.id, props.order);

    // ctx.Orders.forEach((item) => {
    //   if (item.name === orderItem.name) {
    //     item.Amount++;
    //     ctx.Update(ctx.Orders);
    //   }
    // });
    // console.log(ctx.Orders);
  };
  const RemoveOrder = (e) => {
    // ctx.Orders.forEach((item) => {
    //   if (item.name === props.name) {
    //     item.Amount--;
    //   }
    // });
  };
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

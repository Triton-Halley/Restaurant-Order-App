import React, { useContext } from "react";
import AddToCartContext from "../../Context/AddToCart";
import OrderItem from "./OrderItem";

import Styles from "./Orders.module.css";

const Orders = (props) => {
  const ctx = useContext(AddToCartContext);
  const TotalAmount = ctx.Orders.reduce((acc, item) => {
    acc += item.price * item.Amount;
    return acc;
  }, 0);

  const AddItemToCart = (item) => {};
  const RemoveItemFromCart = (id) => {};

  return (
    <div
      className={[
        Styles[props.show ? "modalOn" : "modalOff"],
        Styles.modal,
      ].join(" ")}
    >
      {ctx.Orders.map((item) => (
        <OrderItem
          key={Math.random()}
          name={item.name}
          price={item.price}
          Amount={item.Amount}
          order={item}
          addItem={AddItemToCart.bind(null, item)}
          removeItem={RemoveItemFromCart.bind(null, item.id)}
        />
      ))}

      <div className={Styles.total}>
        <h3>TotalAmount</h3>
        <span>${TotalAmount}</span>
      </div>
    </div>
  );
};

export default Orders;

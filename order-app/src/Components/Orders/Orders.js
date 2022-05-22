import React, { useContext } from "react";
import AddToCartContext from "../../Context/AddToCart";
import OrderItem from "./OrderItem";

import Styles from "./Orders.module.css";

const Orders = (props) => {
  const ctx = useContext(AddToCartContext);
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
        />
      ))}
    </div>
  );
};

export default Orders;

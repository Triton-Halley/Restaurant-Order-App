import React, { useContext } from "react";
import AddToCartContext from "../../Context/AddToCart";
import modal from "../../Context/ShowModal";
import OrderItem from "./OrderItem";
import Overlay from "../ModalOverlay/Overlay";
import Styles from "./Orders.module.css";

const Orders = (props) => {
  const ctx = useContext(AddToCartContext);
  const ctxModal = useContext(modal);

  const TotalAmount = ctx.Orders.reduce((acc, item) => {
    acc += +item.price * +item.Amount;

    acc = Number(acc).toFixed(2);
    return acc;
  }, 0);

  const AddItemToCart = (item) => {
    console.log(item);
    ctx.AddOrder(item);
  };
  const RemoveItemFromCart = (item) => {
    ctx.RemoveOrder(item);
  };

  const closeModalHandler = () => {
    ctxModal.closeModal();
  };
  const OnOrderHandler = function () {
    ctxModal.closeModal();
    //TODO
  };
  return (
    <div
      className={[
        Styles[props.show ? "modalOn" : "modalOff"],
        Styles.modal,
      ].join(" ")}
    >
      <Overlay
        isModalShow={ctxModal.isModalShow}
        closeModal={closeModalHandler}
      />

      {ctx.Orders.map((item) => (
        <OrderItem
          key={Math.random()}
          name={item.name}
          price={item.price}
          Amount={item.Amount}
          order={item}
          addItem={AddItemToCart}
          removeItem={RemoveItemFromCart}
        />
      ))}

      <div className={Styles.total}>
        <h3>TotalAmount</h3>
        <span>${TotalAmount}</span>
      </div>
      <div className={Styles.buttons}>
        <button onClick={closeModalHandler}>Close</button>
        <button className={Styles.OrderBtn} onClick={OnOrderHandler}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Orders;

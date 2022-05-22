import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import AddToCartContext from "../../Context/AddToCart";
import modal from "../../Context/ShowModal";

const HeaderCartButton = (props) => {
  const ctx = useContext(AddToCartContext);
  const ctxModal = useContext(modal);
  const showModal = (e) => {
    ctxModal.showModal();
  };
  return (
    <>
      <button onClick={showModal} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ctx.Orders.length}</span>
        {/* {console.log(ctx.Orders)} */}
      </button>
    </>
  );
};

export default HeaderCartButton;

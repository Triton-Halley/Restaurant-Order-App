import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import AddToCartContext from "../../Context/AddToCart";
import modal from "../../Context/ShowModal";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighed] = useState(false);
  const ctx = useContext(AddToCartContext);
  const ctxModal = useContext(modal);
  const showModal = (e) => {
    ctxModal.showModal();
  };

  const { Orders } = ctx;
  const ButtonClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (Orders.length === 0) {
      return;
    }
    setBtnIsHighlighed(true);
    setTimeout(() => {
      setBtnIsHighlighed(false);
    }, 300);
  }, [Orders]);

  return (
    <>
      <button onClick={showModal} className={ButtonClasses}>
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

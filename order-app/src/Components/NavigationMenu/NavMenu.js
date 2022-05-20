import React from "react";

import styles from "./NavMenu.module.css";

import CartLogo from "../../Images/Cart.png";
const NavMenu = () => {
  return (
    <nav className={styles["Navigation-menu"]}>
      <div>
        <h1>Triton Meal</h1>
      </div>
      <div className={styles.Cart}>
        <div className={styles["Cart-text"]}>
          <div className={styles["logo"]}>
            <img src={CartLogo} alt="CartLogo" />
          </div>

          <div className={styles.text}>
            <p>Your Cart</p>
          </div>
        </div>
        <div className={styles.Count}>
          <p>0</p>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

import React from "react";

import classes from "./Checkout.module.css";

const Checkout = function (props) {
  return (
    <>
      <form>
        {/* name */}
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        {/*phone num */}
        <div>
          <label>Phone Number</label>
          <input type="tel" />
        </div>
        {/* Address*/}
        <div>
          <label>Address</label>
          <input type="text" />
        </div>
        <button onClick={""}>Checkout</button>
      </form>
    </>
  );
};

export default Checkout;

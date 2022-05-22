import React, { useState } from "react";

const AddToCartContext = React.createContext({
  name: "Pizza",
  price: 20,
  Amount: 5,
  TotalAmount: 0,
});

export const AddToCartContextProvider = (props) => {
  const [Orders, setOrder] = useState([]);

  const AddToCart = (order) => {
    let isFound = false;
    setOrder((prev) => {
      prev.forEach((item) => {
        if (item.name === order.name) {
          let amount = +item.Amount;
          let amount1 = +order.Amount;
          const f = amount + amount1;
          item.Amount = f;
          isFound = true;
          return [...prev];
        }
      });
      if (isFound) {
        return [...prev];
      } else {
        return [...prev, order];
      }
    });
    // console.log(Orders);
  };
  const update = (id, orderObj) => {
    const order = Orders.map((order) => {
      console.log(order.id);
      // console.log(order[0]);
      if (order.id === id) {
        order.Amount = orderObj.Amount;
        return Orders;
      }
      return Orders;
    });
    setOrder(order);
  };
  return (
    <AddToCartContext.Provider
      value={{
        name: "",
        price: 20,
        Amount: 5,
        AddOrder: AddToCart,
        Orders: Orders,
        Update: update,
      }}
    >
      {props.children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartContext;

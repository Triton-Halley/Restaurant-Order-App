import React from "react";
import Line from "../Line/Line";
import FoodItem from "./FoodItem";

import Styles from "./FoodList.module.css";

const FoodList = () => {
  const items = [
    {
      name: "Sushi",
      description: "Sushi is a Japanese dish of prepared vinegar's rice",
      price: 22.29,
    },
    {
      name: "Pizza",
      description:
        "Pizza is a dish of Italian origin consisting of a usually round",
      price: 30,
    },
    {
      name: "Hot Dog",
      description:
        "A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun  ",
      price: 15,
    },
    {
      name: "Pasta",
      description:
        "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs",
      price: 13,
    },
    {
      name: "Burger",
      description:
        "A hamburger is a food consisting of fillings —usually a patty of ground meat",
      price: 30,
    },
  ];
  return (
    <div className={Styles.container}>
      {items.map((item) => {
        return (
          <React.Fragment>
            <FoodItem
              key={Math.random()}
              name={item.name}
              description={item.description}
              price={item.price}
            />
            <Line />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FoodList;

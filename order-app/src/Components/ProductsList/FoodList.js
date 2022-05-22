import React from "react";
import FoodItem from "./FoodItem";

import Styles from "./FoodList.module.css";

const FoodList = () => {
  const items = [
    {
      id: "F1",
      name: "Sushi",
      description: "Sushi is a Japanese dish of prepared vinegar's rice",
      price: 22.29,
    },
    {
      id: "F2",
      name: "Pizza",
      description:
        "Pizza is a dish of Italian origin consisting of a usually round",
      price: 30,
    },
    {
      id: "F3",
      name: "Hot Dog",
      description:
        "A hot dog is a food consisting of a grilled or steamed sausage served",
      price: 15,
    },
    {
      id: "F4",
      name: "Pasta",
      description:
        "Pasta is a type of food typically made from an unleavened dough",
      price: 13,
    },
    {
      id: "F5",
      name: "Burger",
      description:
        "A hamburger is a food consisting of fillings —usually a patty of ground meat",
      price: 30,
    },
  ];
  return (
    <div className={Styles.container}>
      {items.map((item) => (
        <FoodItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default FoodList;

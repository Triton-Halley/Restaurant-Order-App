import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

import Styles from "./FoodList.module.css";

const FoodList = () => {
  const [Foods, setFoods] = useState([]);
  useEffect(() => {
    (async function () {
      const data_json = await fetch(
        "https://restaurant-order-app-73653-default-rtdb.firebaseio.com/meals.json"
      );
      setFoods(await data_json.json());
    })();
  }, []);
  console.log(Foods);
  return (
    <div className={Styles.container}>
      {Foods.map((item) => (
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

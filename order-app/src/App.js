import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import FoodList from "./Components/ProductsList/FoodList";
import Orders from "./Components/Orders/Orders";
import classes from "./App.module.css";
import modal from "./Context/ShowModal";
function App() {
  const ctxModal = useContext(modal);

  const OnModalCloseHandler = (e) => {
    ctxModal.closeModal();
  };
  return (
    <div className={classes.container}>
      <Orders show={ctxModal.isModalShow} />
      {/* <div
        onClick={OnModalCloseHandler}
        className={[
          classes[ctxModal.isModalShow ? "modalOn" : "modalOff"],
          classes["modal-overlay"],
        ].join(" ")}
      ></div> */}
      <Header />
      <FoodList />
    </div>
  );
}

export default App;

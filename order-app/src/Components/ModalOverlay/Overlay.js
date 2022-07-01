import React from "react";
import ReactDOM from "react-dom";
import classes from "./Overlay.module.css";

const Overlay = function (props) {
  const OnModalCloseHandler = () => {
    props.closeModal();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <div
          onClick={OnModalCloseHandler}
          className={[
            classes[props.isModalShow ? "modalOn" : "modalOff"],
            classes["modal-overlay"],
          ].join(" ")}
        ></div>,
        document.getElementById("overlay")
      )}
    </>
  );
};
export default Overlay;

import React, { useState } from "react";

const modal = React.createContext({
  isModalShow: false,
});

export const ModalProvider = (props) => {
  const [isShow, setShow] = useState(false);
  const modalShow = () => {
    setShow(true);
  };
  const modalClose = () => {
    setShow(false);
  };
  return (
    <modal.Provider
      value={{
        isModalShow: isShow,
        showModal: modalShow,
        closeModal: modalClose,
      }}
    >
      {props.children}
    </modal.Provider>
  );
};
export default modal;

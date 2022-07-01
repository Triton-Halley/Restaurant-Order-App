import React, { useState } from "react";

const CheckoutModal = React.createContext({
  isShowModal: false,
});

const CheckoutModalProvider = function (props) {
  const [isShowModal, setIsShowModal] = useState(false);

  const ShowModal = () => {
    setIsShowModal(true);
  };
  const CloseModal = () => {
    setIsShowModal(false);
  };
  return (
    <CheckoutModal.Provider
      value={{
        isShowModal,
        ShowModal,
        CloseModal,
      }}
    >
      {props.children}
    </CheckoutModal.Provider>
  );
};
export default CheckoutModalProvider;

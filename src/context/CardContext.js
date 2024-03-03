import React, { createContext, useContext } from "react";

const cardContext = createContext();
export const useCard = () => useContext(cardContext);

const CardContext = ({ children }) => {
  function addToBag(newData) {
    let data = JSON.parse(localStorage.getItem("apple")) || [];
    data.push(newData);
    localStorage.setItem("apple", JSON.stringify(data));
  }

  function checkProductInBag(id) {
    let data = JSON.parse(localStorage.getItem("apple")) || [];
    if (data.some((el) => el.id === id)) {
      return true;
    } else {
      return false;
    }
  }

  const values = {
    addToBag,
    checkProductInBag,
  };
  return <cardContext.Provider value={values}>{children}</cardContext.Provider>;
};

export default CardContext;

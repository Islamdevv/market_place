import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS } from "../helpers/const";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCT:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const productColectionRef = collection(db, "data");

  async function addProduct(newProduct) {
    await addDoc(productColectionRef, newProduct);
  }

  async function readProduct() {
    let data = await getDocs(productColectionRef);
    data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({
      type: ACTIONS.GET_PRODUCT,
      payload: data,
    });
  }

  async function deleteProduct(id) {
    const productDocRef = doc(db, "data", id);
    await deleteDoc(productDocRef);
  }

  async function getOneProduct(id) {
    const productDocRef = doc(db, "data", id);
    let data = await getDoc(productDocRef);
    data = data.data();
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  }

  async function updateProduct(id, newProduct) {
    const productDocRef = doc(db, "data", id);
    await updateDoc(productDocRef, newProduct);
  }

  //! PAGINATION

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(state.products.length / itemsPerPage);

  function currentPage() {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return state.products.slice(start, end);
  }

  //! PAGINATION

  //! SEARCH

  const [value, setValue] = useState("");
  function searchProduct(value) {
    const result = state.products.filter((el) =>
      el.title.toLowerCase().includes(value.toLowerCase())
    );
    dispatch({
      type: ACTIONS.GET_PRODUCT,
      payload: result,
    });
    if (!value) {
      readProduct();
    }
  }

  //! SEARCH

  //! FILTER
  function sortByPrice(value) {
    if (value === "max") {
      const result = state.products.sort((a, b) => +b.price - +a.price);
      dispatch({
        type: ACTIONS.GET_PRODUCT,
        payload: result,
      });
    } else if (value === "min") {
      const result = state.products.sort((a, b) => +a.price - +b.price);
      dispatch({
        type: ACTIONS.GET_PRODUCT,
        payload: result,
      });
    } else {
      readProduct();
    }
  }

  //! FILTER

  const values = {
    addProduct,
    readProduct,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    updateProduct,
    currentPage,
    setPage,
    count,
    searchProduct,
    setValue,
    value,
    sortByPrice,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;

import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import CardProduct from "./CardProduct";
import { Box } from "@mui/material";
import PaginationProduct from "./PaginationProduct";

const ListProduct = () => {
  const { readProduct, products, currentPage, sortByPrice } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <Box className="container">
      <select onChange={(e) => sortByPrice(e.target.value)}>
        <option value="all">All</option>
        <option value="max">Price: High-Low</option>
        <option value="min">Price: Low-High</option>
      </select>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        {products
          ? currentPage().map((el, index) => (
              <CardProduct el={el} key={index} />
            ))
          : ""}
      </div>
      <PaginationProduct />
    </Box>
  );
};

export default ListProduct;

import React from "react";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

export default function PaginationProduct() {
  const { count, setPage } = useProduct();
  function handleChangePage(p, n) {
    setPage(n);
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination onChange={handleChangePage} count={count} color="secondary" />
    </Box>
  );
}

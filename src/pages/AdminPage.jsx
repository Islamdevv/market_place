import React from "react";
import AddProduct from "../components/products/AddProduct";
import { Container } from "@mui/material";

const AdminPage = () => {
  return (
    <Container>
      <AddProduct isEdit={false} />
    </Container>
  );
};

export default AdminPage;

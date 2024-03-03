import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const init = {
  title: "",
  price: "",
  type: "",
  descr: "",
  image: "",
  id: Date.now(),
};

const Form = ({ isEdit }) => {
  const { getOneProduct, oneProduct, addProduct, updateProduct } = useProduct();

  const { id } = useParams();
  const [products, setProducts] = useState(init);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && oneProduct) {
      getOneProduct(id);
    }
  }, []);

  useEffect(() => {
    if (isEdit && oneProduct) {
      setProducts(oneProduct);
    }
  }, [oneProduct]);

  function handleValues(e) {
    if (e.target.name === "price") {
      let obj = { ...products, [e.target.name]: Number(e.target.value) };
      setProducts(obj);
    } else {
      let obj = { ...products, [e.target.name]: e.target.value };
      setProducts(obj);
    }
  }

  function handleChangeProduct() {
    addProduct(products);
    navigate("/menu");
  }

  function handleSaveProduct() {
    updateProduct(id, products);
    navigate("/menu");
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
        }}
      >
        <TextField
          onChange={handleValues}
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={products.title}
        />
        <TextField
          onChange={handleValues}
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={products.price}
        />
        <TextField
          onChange={handleValues}
          name="type"
          id="outlined-basic"
          label="Type"
          variant="outlined"
          value={products.type}
        />
        <TextField
          onChange={handleValues}
          name="descr"
          id="outlined-basic"
          label="Descr"
          variant="outlined"
          value={products.descr}
        />
        <TextField
          onChange={handleValues}
          name="image"
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={products.image}
        />
        {isEdit ? (
          <Button
            onClick={handleSaveProduct}
            sx={{ background: "#181818" }}
            variant="contained"
          >
            save
          </Button>
        ) : (
          <Button
            onClick={handleChangeProduct}
            sx={{ background: "#181818" }}
            variant="contained"
          >
            create
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Form;

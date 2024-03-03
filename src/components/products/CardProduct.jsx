import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function CardProduct({ el }) {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 375, height: 500, borderRadius: "20px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.title}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 290 }} image={el.image} title="green iguana" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {el.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(el.id)} size="small">
          Delete
        </Button>
        <Button onClick={() => navigate(`/edit/${el.id}`)} size="small">
          edit
        </Button>
        <Button
          onClick={() => navigate(`/details/${el.id}`)}
          sx={{ borderRadius: "20px" }}
          variant="contained"
          size="small"
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

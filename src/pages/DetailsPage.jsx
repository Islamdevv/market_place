import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useCard } from "../context/CardContext";

export default function DetailsPage() {
  const { getOneProduct, oneProduct, readProduct } = useProduct();
  const { addToBag, checkProductInBag } = useCard();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    readProduct();
  }, [oneProduct]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: "50px 0" }}>
      <Card sx={{ width: 520, height: 480, p: 5 }}>
        <Typography gutterBottom variant="h5" component="div">
          {oneProduct.title}
        </Typography>
        <CardMedia
          sx={{ height: 330 }}
          image={oneProduct.image}
          title="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {oneProduct.price}$
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {oneProduct.descr}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          {checkProductInBag(oneProduct.id) ? (
            <Button onClick={() => navigate("/menu")} size="small">
              Continue Shopping
            </Button>
          ) : (
            <Button onClick={() => addToBag(oneProduct)} size="small">
              add to bag
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

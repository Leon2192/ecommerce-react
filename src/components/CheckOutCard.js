import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { DeleteOutline } from "@mui/icons-material";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

export default function CheckOutCard({ product }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: product.id,
    });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Typography className="actionPrice" variant="h5" color="green">
            {product.price}
          </Typography>
        }
        title={product.name}
        subheader="Hay stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />

      <CardActions disableSpacing className="cardActions">
        <div className="favIcon">
          <IconButton aria-label="share">
            <FavoriteBorderIcon fontSize="large" />
          </IconButton>
        </div>
        <IconButton aria-label="share">
          <DeleteOutline fontSize="large" onClick={removeItem} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

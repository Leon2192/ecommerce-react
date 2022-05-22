import { Button } from "@mui/material";
import React from "react";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import accounting from "accounting";
import { useNavigate } from "react-router-dom";

const Total = () => {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="rootTotal">
      <h5>Total Items: {basket?.length}</h5>
      <h5>Total: ${`${basket.reduce((acc, prod) => acc + prod.price, 0)}`}</h5>
      <Button
        className="buttonCheckout"
        variant="contained"
        color="primary"
        onClick={() => navigate("/checkout-page")}
      >
        Finalizar compra
      </Button>
    </div>
  );
};

export default Total;

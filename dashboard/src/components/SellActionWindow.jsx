import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContextSell from "./GeneralContextSell";

import "./BuyActionWindow.css";

export default function SellActionWindow({ uid }){
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContextSell = useContext(GeneralContextSell);

  const handleSellClick = () => {
    console.log("Sell clicked");
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    generalContextSell.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContextSell.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window"> 
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Button>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};


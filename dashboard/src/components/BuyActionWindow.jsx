import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import { FundsContext } from "./FundsContext";
import { watchlist } from "../data/data";
import { HoldingsContext } from "./HoldingsContext";

import "./BuyActionWindow.css";

export default function BuyActionWindow({ uid }) {
  const { equity, withdrawFunds } = useContext(FundsContext);
  const generalContext = useContext(GeneralContext);
  const { fetchHoldings } = useContext(HoldingsContext);
  
  const stock = watchlist.find((item) => item.name === uid);
  const currentPrice = stock ? stock.price : 0;

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(currentPrice);

  const marginRequired = (currentPrice * stockQuantity).toFixed(2);

  const handleBuyClick = async () => {
    if (Number(marginRequired) > equity) {
      alert("Insufficient funds to place this order");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      withdrawFunds(parseFloat(marginRequired));
      generalContext.closeBuyWindow();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
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
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

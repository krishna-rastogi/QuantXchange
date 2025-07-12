import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContextSell from "./GeneralContextSell";
import { FundsContext } from "./FundsContext";
import { HoldingsContext } from "./HoldingsContext";
import { watchlist } from "../data/data";

import "./BuyActionWindow.css";

export default function SellActionWindow({ uid }) {
  const generalContextSell = useContext(GeneralContextSell);
  const { addFunds } = useContext(FundsContext);
  const { fetchHoldings } = useContext(HoldingsContext);

  const stock = watchlist.find((item) => item.name === uid);
  const currentPrice = stock ? stock.price : 0;

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(currentPrice);

  const marginReceived = (currentPrice * stockQuantity).toFixed(2);

  const handleSellClick = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });
      addFunds(parseFloat(marginReceived));
      fetchHoldings();
      generalContextSell.closeSellWindow();
    } catch (error) {
      alert("Failed to place sell order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    generalContextSell.closeSellWindow();
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
        <span>Amount to receive ₹{marginReceived}</span>
        <div>
          <Link
            className="btn btn-red"
            onClick={handleSellClick}
            style={{ background: "red" }}
          >
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

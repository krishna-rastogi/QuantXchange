import { Tooltip } from "@mui/material";

import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import GeneralContextSell from "./GeneralContextSell";

export default function WatchListActions({ uid }) {
  const generalContext = useContext(GeneralContext);
  const generalContextSell = useContext(GeneralContextSell);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContextSell.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow onClick={handleBuyClick}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow onClick={handleSellClick}>
        <button className="sell">Sell</button>
      </Tooltip>
    </span>
  );
}

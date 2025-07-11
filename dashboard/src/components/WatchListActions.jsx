import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";

import { useContext } from "react";
import GeneralContext from "./GeneralContext";

export default function WatchListActions({ uid }) {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow onClick={handleBuyClick}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow>
        <button className="sell">Sell</button>
      </Tooltip>
    </span>
  );
}

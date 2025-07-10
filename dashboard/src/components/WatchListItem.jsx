import { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import WatchListActions from "./WatchListActions";

export default function WatchListItem({ stock }) {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (evt) => {
    setShowWatchlistActions(true);
  };
  const handleMouseExit = (evt) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
}

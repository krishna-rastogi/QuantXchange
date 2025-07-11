import { Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";
import { FundsProvider } from "./FundsContext";
import { HoldingsProvider } from "./HoldingsContext";


export default function Dashboard() {
  let username = "";
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwtDecode(token);

      username = decoded.username;
    } catch (error) {
      console.error("Invalid token", error);
    }
  }
  return (
        <HoldingsProvider>
    <FundsProvider>
      <GeneralContextProvider>
        <div className="dashboard-container">
          <WatchList />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Summary username={username} />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </div>
      </GeneralContextProvider>
    </FundsProvider>
        </HoldingsProvider>
  );
}

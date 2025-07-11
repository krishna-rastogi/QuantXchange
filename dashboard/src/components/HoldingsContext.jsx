import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HoldingsContext = createContext();

export const HoldingsProvider = ({ children }) => {
  const [allHoldings, setAllHoldings] = useState([]);

  const fetchHoldings = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/allHoldings`).then((res) => {
        setAllHoldings(res.data);
      });
    } catch (error) {
      console.error("Error fetching holdings:", error);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  return (
    <HoldingsContext.Provider value={{ allHoldings, fetchHoldings }}>
      {children}
    </HoldingsContext.Provider>
  );
};

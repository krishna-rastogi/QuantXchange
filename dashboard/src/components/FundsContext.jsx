import { createContext, useState } from "react";

export const FundsContext = createContext();

export const FundsProvider = ({ children }) => {
  const [equity, setEquity] = useState(3740); 

  const addFunds = (amount) => {
    setEquity(prev => {
      const updated = prev + amount;
      console.log("Adding funds. Prev:", prev, "Amount:", amount, "Updated:", updated);
      return updated;
    });
  };

  const withdrawFunds = (amount) => {
    setEquity(prev => {
      const updated = prev - amount;
      console.log("Withdrawing funds. Prev:", prev, "Amount:", amount, "Updated:", updated);
      return updated;
    });
  };
  console.log("Rendering FundsProvider with equity:", equity);

  return (
    <FundsContext.Provider value={{ equity, addFunds, withdrawFunds }}>
      {children}
    </FundsContext.Provider>
  );
};
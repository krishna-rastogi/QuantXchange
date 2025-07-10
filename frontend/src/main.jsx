import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

import { AuthProvider } from "./contexts/AuthContexts";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);

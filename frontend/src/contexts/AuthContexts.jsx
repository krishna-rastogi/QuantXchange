import axios from "axios";
import { createContext, useState } from "react";
import { StatusCodes } from 'http-status-codes';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const request = await client.post("/register", {
        name,
        username,
        password
      });
      if (request.status === StatusCodes.CREATED) {
        return request.data.message;
      }
    } catch (error) {
      throw error.response?.data?.message || "Registration failed";
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const request = await client.post("/login", {
        username,
        password
      });
      if (request.status === StatusCodes.OK) {
        const token = request.data.token;
        localStorage.setItem("token", token);
        // window.location.href = `http://localhost:5174/?token=${token}`;
        window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}/?token=${token}`;

        return "Login Successful";
      }
    } catch (error) {
      throw error.response?.data?.message || "Login failed";
    }
  };

  const data = {
    userData,
    setUserData,
    handleRegister,
    handleLogin
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

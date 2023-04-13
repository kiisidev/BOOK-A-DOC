import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./context/userContext";

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#014DD5', // Custom primary color
    },
  },
  typography: {
    fontFamily: 'Sora'
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <UserProvider>
      <ToastContainer />
      <App />
    </UserProvider>
  </ThemeProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { HDRTheme } from "./theme";
import "./theme/styles.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider resetCSS theme={HDRTheme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);

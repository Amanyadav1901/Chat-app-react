import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*Browser router from react-router-dom */}
      <ChakraProvider>
        {/* chakra ui provider */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

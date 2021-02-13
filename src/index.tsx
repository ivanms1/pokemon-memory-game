import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import AppProvider from "./components/AppContext";

ReactDOM.render(
  <AppProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AppProvider>,
  document.getElementById("root")
);

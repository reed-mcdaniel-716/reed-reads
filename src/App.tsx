import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/vollkorn/400.css";
import "@fontsource/vollkorn/500.css";
import "@fontsource/vollkorn/600.css";
import "@fontsource/vollkorn/700.css";
import "@fontsource/vollkorn/800.css";
import "@fontsource/vollkorn/900.css";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar/NavBar";
import Homepage from "./components/Homepage/Homepage";

const colors = {
  brand: {
    seasalt: "#F8F8F8ff",
    brown_sugar: "#B25F3Bff",
    ash_gray: "#B8BBADff",
    chamoisee: "#93765Cff",
    viridian: "#1D7E62ff",
    black_olive: "#383526ff",
    gamboge: "#E9A141ff",
  },
};

const fonts = {
  heading: `'Vollkorn', sans-serif`,
  body: `'Vollkorn', sans-serif`,
};

const theme = extendTheme({
  colors: { ...colors },
  fonts: { ...fonts },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <div>
          <NavBar />
          <Homepage />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;

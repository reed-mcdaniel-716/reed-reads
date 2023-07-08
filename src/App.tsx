import React from "react";
import "./App.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import "@fontsource/vollkorn/400.css";
import "@fontsource/vollkorn/500.css";
import "@fontsource/vollkorn/600.css";
import "@fontsource/vollkorn/700.css";
import "@fontsource/vollkorn/800.css";
import "@fontsource/vollkorn/900.css";

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
      <div>
        <NavBar />
      </div>
    </ChakraProvider>
  );
}

export default App;

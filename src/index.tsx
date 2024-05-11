import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

import App from "./App";
import ErrorPage from "./components/Error/ErrorPage";
import NavBarWrapper from "./components/NavBar/NavBarWrapper";
import SearchResultsWrapper from "./components/Search/SearchResultsWrapper";
import ResultDetails from "./components/BookDetail/BookDetail";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/searchResults/:searchQuery",
        element: <SearchResultsWrapper />,
      },
      {
        path: "/searchResults/:searchQuery/:bookId/details",
        element: <ResultDetails />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

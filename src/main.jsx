import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/root";
import Item from "./routes/item";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
    secondary: {
        50: "#f0e5ff",
        100: "#e0ccff",
        200: "#c299ff",
        300: "#a366ff",
        400: "#8533ff",
        500: "#6600ff",
        600: "#5200cc",
        700: "#3d0099",
        800: "#290066",
        900: "#140033",
    },
};

const theme = extendTheme({ colors });

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/category/:id",
        element: <App />,
    },
    {
        path: "/item/:id",
        element: <Item />,
    },
    {
        path: "/cart",
        element: <div>Hello world!</div>,
    },
    {
        path: "/checkout",
        element: <div>Hello world!</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Item from "./routes/item";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ErrorPage from "./routes/error-page";
import CartProvider from "./context/CartContext";
import CartContainer from "./routes/CartContainer";

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

import { initializeApp } from "firebase/app";
import Checkout from "./routes/checkout";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                errorElement: <ErrorPage />,
                element: <Root />,
            },
            {
                path: "/category/:id",
                element: <Root />,
            },
            {
                path: "/item/:id",
                element: <Item />,
            },
            {
                path: "/cart",
                element: <CartContainer />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartProvider>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />
            </ChakraProvider>
        </CartProvider>
    </React.StrictMode>
);

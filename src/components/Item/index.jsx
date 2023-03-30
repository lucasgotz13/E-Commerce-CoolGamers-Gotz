import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Item({ id, title, precio, image }) {
    return (
        <div className="p-4 border-2 border-gray-200 font-Poppins flex flex-col items-center gap-2.5 max-w-xs">
            <img src={image} alt={image} className="w-48 m-2 rounded-lg" />
            <h4>{title}</h4>
            <h4>${precio}</h4>
            <Link to={`/item/${id}`}>
                <Button colorScheme="secondary">Ver item</Button>
            </Link>
            <Button colorScheme="whatsapp">Agregar al carrito</Button>
        </div>
    );
}

export default Item;

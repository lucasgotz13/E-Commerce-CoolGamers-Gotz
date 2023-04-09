import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";

function Item({ id, title, precio, image, itemInfo }) {
    const { setCount, addItem } = useContext(CartContext);

    return (
        <div className="p-10 border-2 border-gray-200 font-Poppins flex flex-col items-center gap-2.5 max-w-xs">
            <img src={image} alt={image} className="w-48 m-2 rounded-lg" />
            <h4 className="text-center">{title}</h4>
            <h4>${precio}</h4>
            <Link to={`/item/${id}`} onClick={() => setCount(1)}>
                <Button colorScheme="secondary">Ver producto</Button>
            </Link>
            {itemInfo.stock ? (
                <Button
                    colorScheme="whatsapp"
                    onClick={() => addItem(itemInfo, 1)}
                >
                    Agregar al carrito
                </Button>
            ) : (
                <Button isDisabled>Sin stock</Button>
            )}
        </div>
    );
}

export default Item;

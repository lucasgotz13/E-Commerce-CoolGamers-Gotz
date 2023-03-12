import { useState } from "react";
import { Button } from "@chakra-ui/react";

function ItemCount() {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(20);

    const increaseNumberItems = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decreaseNumberItems = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        if (count <= stock) {
            console.log("Producto añadido al carrito");
            console.log(count);
            setStock(stock - count);
            console.log(stock);
        } else {
            console.log("No hay stock para esa cantidad");
        }
    };

    return (
        <div className="flex flex-col">
            <ul className="flex items-center gap-10 mb-2">
                <li>
                    <Button onClick={decreaseNumberItems}>-</Button>
                </li>
                <li>{count}</li>
                <li>
                    <Button onClick={increaseNumberItems}>+</Button>
                </li>
            </ul>
            <Button onClick={addToCart} colorScheme="secondary" w={225}>
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;

import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCount({ item }) {
    const {
        count,
        stock,
        increaseNumberItems,
        decreaseNumberItems,
        addToCart,
        cart,
        setCart,
        addItem,
    } = useContext(CartContext);

    console.log(cart);
    console.log(item);

    return (
        <div className="flex flex-col">
            <ul className="flex items-center gap-10 mb-2">
                <li>
                    <Button onClick={decreaseNumberItems}>-</Button>
                </li>
                <li>{count}</li>
                <li>
                    <Button onClick={() => increaseNumberItems(item)}>+</Button>
                </li>
            </ul>
            {item.stock ? (
                <Button
                    onClick={() => addItem(item, count)}
                    colorScheme="whatsapp"
                    w={225}
                >
                    Agregar al carrito
                </Button>
            ) : (
                <Button w={225} isDisabled>
                    No Hay stock
                </Button>
            )}
        </div>
    );
}

export default ItemCount;

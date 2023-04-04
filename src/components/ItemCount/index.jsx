import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function ItemCount({ item }) {
    const {
        count,
        increaseNumberItems,
        decreaseNumberItems,
        cart,
        addItem,
        addDisabled,
    } = useContext(CartContext);

    console.log(cart);
    console.log(item);

    return (
        <div className="flex flex-col">
            <ul className="flex justify-center items-center gap-10 mb-2">
                <li>
                    <Button
                        onClick={decreaseNumberItems}
                        isDisabled={count === 1}
                    >
                        -
                    </Button>
                </li>
                <li>{count}</li>
                <li>
                    <Button
                        onClick={() => increaseNumberItems(item)}
                        isDisabled={count === item.stock}
                    >
                        +
                    </Button>
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
            {cart.length > 0 && (
                <NavLink to={"/cart"}>
                    <Button mt={5} w={225}>
                        Terminar compra
                    </Button>
                </NavLink>
            )}
        </div>
    );
}

export default ItemCount;

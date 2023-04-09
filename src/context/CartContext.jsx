import { createContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(20);
    const [item, setItem] = useState(null);
    const [cart, setCart] = useState([]);

    const increaseNumberItems = () => {
        setCount(count + 1);
    };

    const decreaseNumberItems = () => {
        setCount(count - 1);
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

    const addItem = (producto, cantidad) => {
        const itemInCart = cart.find((item) => item.id === producto.id);
        if (itemInCart) {
            itemInCart.cantidad += cantidad;
            setCart([...cart]);
            Swal.fire({
                title: "Producto agregado al carrito!",
                icon: "success",
            });
        } else {
            setCart([...cart, { ...producto, cantidad }]);
            Swal.fire({
                title: "Producto agregado al carrito!",
                icon: "success",
            });
        }
    };

    const removeItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotalItems = cart.reduce(
        (acc, currentValue) => acc + currentValue.cantidad,
        0
    );

    return (
        <CartContext.Provider
            value={{
                count,
                setCount,
                stock,
                setStock,
                increaseNumberItems,
                decreaseNumberItems,
                addToCart,
                cart,
                setCart,
                item,
                setItem,
                addItem,
                removeItem,
                clearCart,
                cartTotalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

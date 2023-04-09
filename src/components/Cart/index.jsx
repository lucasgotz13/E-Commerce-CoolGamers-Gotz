import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Button, Icon } from "@chakra-ui/react";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";

function Cart() {
    const { cart, setCart, removeItem, clearCart } = useContext(CartContext);
    console.log(cart);
    const db = getFirestore();

    const total = cart.reduce(
        (acc, curr) => acc + curr.precio * curr.cantidad,
        0
    );

    function updateOrder(productId, finalStock) {
        const itemRef = doc(db, "items", productId);
        updateDoc(itemRef, { stock: finalStock });
    }

    function sendOrder() {
        const order = {
            buyer: {
                name: "Jorge",
                email: "ejemplo@ejemplo.com",
                phone: "999999",
            },
            items: cart,
            total: total,
        };

        const collectionRef = collection(db, "orders");

        addDoc(collectionRef, order)
            .then(() => {
                cart.map((product) => {
                    const finalStock = product.stock - product.cantidad;
                    updateOrder(product.id, finalStock);
                });
            })
            .catch((err) => console.log({ err }));

        setCart([]);
    }

    console.log({ total });

    return (
        <div className="p-10 flex flex-col">
            <h1 className="text-3xl font-Poppins text-secondary font-bold">
                Carrito
            </h1>
            <div className="mt-10 mb-10 flex flex-col gap-4">
                {cart.map((item) => (
                    <div
                        className="p-5 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 border-2 border-dashed max-w-2xl font-Poppins"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-32"
                        />
                        <div className="mt-5 flex justify-between items-center">
                            <div className="flex flex-col sm:justify-between gap-1 mr-36">
                                <h1 className="text-sm font-bold">
                                    {item.title}
                                </h1>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio: ${item.precio}</p>
                            </div>
                            <Icon
                                boxSize={["12", "14"]}
                                onClick={() => removeItem(item.id)}
                                className="ml-auto hover:cursor-pointer"
                            >
                                <FaTrash />
                            </Icon>
                        </div>
                    </div>
                ))}
            </div>

            {cart.length > 0 ? (
                <div className="flex flex-col justify-center items-center sm:items-start">
                    <h4 className="text-xl mb-5">
                        Total: <span className="font-bold">${total}</span>
                    </h4>
                    <NavLink to={"/checkout"}>
                        <Button
                            colorScheme={"whatsapp"}
                            w={40}
                            className="mb-5"
                        >
                            Ir a pagar
                        </Button>
                    </NavLink>
                    <Button
                        colorScheme={"secondary"}
                        w={40}
                        onClick={clearCart}
                    >
                        Limpiar carrito
                    </Button>
                </div>
            ) : (
                <div className="mt-10 sm:mt-20 flex flex-col items-center gap-10">
                    <h1 className="text-3xl sm:text-5xl text-center font-Poppins font-bold">
                        No hay ningun producto en el carrito
                    </h1>
                    <NavLink to={"/"}>
                        <Button colorScheme={"secondary"}>
                            Volver al inicio
                        </Button>
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Cart;

import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    updateDoc,
} from "firebase/firestore";

function Cart() {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    console.log(cart);
    const db = getFirestore();

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
            total: 0,
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
    }

    const total = cart.reduce(
        (acc, curr) => acc + curr.precio * curr.cantidad,
        0
    );

    console.log({ total });

    return (
        <div className="p-10 flex flex-col">
            <h1 className="text-3xl font-Poppins text-secondary font-bold">
                Carrito
            </h1>
            <div className="mt-10 mb-10 flex flex-col gap-4">
                {cart.map((item) => (
                    <div className="flex items-center gap-4" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-32"
                        />
                        <div>
                            <h1>{item.title}</h1>
                            <p>Cantidad: {item.cantidad}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)}>
                            <FaTrash size={25} />
                        </button>
                    </div>
                ))}
            </div>
            <h4>Total: {total}</h4>
            <Button
                colorScheme={"whatsapp"}
                w={40}
                onClick={sendOrder}
                className="mb-5"
            >
                Pagar
            </Button>
            <Button colorScheme={"secondary"} w={40} onClick={clearCart}>
                Limpiar carrito
            </Button>
        </div>
    );
}

export default Cart;

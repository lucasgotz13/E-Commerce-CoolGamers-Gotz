import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@chakra-ui/react";
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    updateDoc,
} from "firebase/firestore";

function Checkout() {
    const { cart, setCart } = useContext(CartContext);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const db = getFirestore();

    const total = cart.reduce(
        (acc, curr) => acc + curr.precio * curr.cantidad,
        0
    );

    const isName = (value) => /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(value);
    const isEmail = (value) =>
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
            value
        );
    const isPhoneNumber = (value) => Boolean(parseInt(value));

    const handlePayment = (e) => {
        e.preventDefault();

        if (
            isName(nameValue) !== false &&
            isEmail(emailValue) !== false &&
            isPhoneNumber(phoneValue) !== false
        ) {
            if (cart.length >= 1) {
                console.log("Compra exitosa");
                sendOrder();
            }
        } else {
            console.log("ERROR");
        }
    };

    function updateOrder(productId, finalStock) {
        const itemRef = doc(db, "items", productId);
        updateDoc(itemRef, { stock: finalStock });
    }

    function sendOrder() {
        const order = {
            buyer: {
                name: nameValue,
                email: emailValue,
                phone: parseInt(phoneValue),
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
    return (
        <div className="p-10 font-Poppins">
            <h1 className="text-3xl text-secondary font-bold">Checkout</h1>
            <h3 className="text-center text-2xl mb-16">
                Ingresa tus datos para finalizar la compra
            </h3>
            <form className="flex justify-center">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-bold">
                            Nombre Completo:
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold">
                            E-mail:
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setEmailValue(e.target.value)}
                            placeholder="ejemplo@email.com"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone-number" className="font-bold">
                            Número de teléfono:
                        </label>
                        <input
                            type="number"
                            onChange={(e) => setPhoneValue(e.target.value)}
                            placeholder="+54 11 1234 5678"
                        />
                    </div>
                    <Button
                        variant={"outline"}
                        colorScheme="whatsapp"
                        onClick={handlePayment}
                    >
                        Pagar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;

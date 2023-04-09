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
import Swal from "sweetalert2";
import OrderDetail from "../components/OrderDetail";

function Checkout() {
    const { cart, setCart } = useContext(CartContext);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [orderId, setOrderId] = useState(null);
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
    const isPhoneNumber = (value) => /^11\s\d{4}\s\d{4}$/.test(value);

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
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Uno o mas datos fueron ingresados incorrectamente.",
            });
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
            .then((response) => {
                setOrderId(response._key.path.segments[1]);
                cart.map((product) => {
                    const finalStock = product.stock - product.cantidad;
                    updateOrder(product.id, finalStock);
                });
                Swal.fire({
                    title: "Gracias por tu compra!",
                    icon: "success",
                });
            })
            .catch((err) => console.log({ err }));

        setCart([]);
    }

    if (cart.length === 0) {
        return (
            <OrderDetail
                orderId={orderId}
                nameValue={nameValue}
                emailValue={emailValue}
                phoneValue={phoneValue}
            />
        );
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
                            type="email"
                            onChange={(e) => setEmailValue(e.target.value)}
                            placeholder="ejemplo@email.com"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone-number" className="font-bold">
                            Número de teléfono:
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setPhoneValue(e.target.value)}
                            placeholder="11 1234 5678"
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

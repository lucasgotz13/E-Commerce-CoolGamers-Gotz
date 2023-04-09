import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import OrderDetail from "../OrderDetail";
import Checkout from "../Checkout";

function CheckoutContainer() {
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
        <Checkout
            setNameValue={setNameValue}
            setEmailValue={setEmailValue}
            setPhoneValue={setPhoneValue}
            handlePayment={handlePayment}
        />
    );
}

export default CheckoutContainer;

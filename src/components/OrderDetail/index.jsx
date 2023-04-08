import { Button, Spinner } from "@chakra-ui/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function OrderDetail({ orderId, nameValue, emailValue, phoneValue }) {
    if (orderId == null) {
        return (
            <div className="mt-40 sm:mt-64 grid place-items-center">
                <Spinner size="xl" thickness="4px" color="secondary.500" />
            </div>
        );
    }

    return (
        <div className="p-20 flex flex-col justify-center items-center font-Poppins">
            <h1 className="text-5xl text-secondary font-bold mb-10">
                Gracias por tu compra!
            </h1>
            <Card>
                <CardHeader>
                    <h3 className="text-3xl font-bold">Detalle de compra</h3>
                </CardHeader>
                <CardBody className="flex flex-col gap-3">
                    <p>Nombre del comprador: {nameValue}</p>
                    <p>Email del comprador: {emailValue}</p>
                    <p>Número de teléfono del comprador: {phoneValue}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <p className="text-xl">
                        <span className="font-bold underline">
                            Tu order ID es:
                        </span>{" "}
                        {orderId}
                    </p>
                </CardFooter>
            </Card>
            <Link to={"/"}>
                <Button colorScheme="secondary" className="mt-10">
                    Volver al inicio
                </Button>
            </Link>
        </div>
    );
}

export default OrderDetail;

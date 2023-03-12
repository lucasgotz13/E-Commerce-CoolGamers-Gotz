import { Button } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function ItemDetail({ item }) {
    return (
        <>
            <Link to={`/category/${item?.category}`}>
                <FaArrowLeft size={40} />
            </Link>
            <div className="mt-20 flex justify-center gap-24">
                <img src={item?.img} className="w-96" />
                <div className="flex flex-col gap-8">
                    <h1 className="text-3xl font-Poppins ">{item?.name}</h1>
                    <p className="max-w-md">{item?.descripcion}</p>
                    <p className="text-3xl text-accent font-Poppins">
                        Precio: ${item?.precio}
                    </p>
                    {/* <Button colorScheme="secondary" variant="solid">
                        Agregar al carrito */}
                    {/* </Button> */}
                    <ItemCount />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;

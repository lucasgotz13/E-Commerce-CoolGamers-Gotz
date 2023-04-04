import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function ItemDetail({ item }) {
    console.log(item);

    return (
        <>
            <Link to={`/category/${item?.category}`}>
                <FaArrowLeft size={40} />
            </Link>
            <div className="flex flex-col justify-center items-center mt-20 sm:flex-row  sm:justify-center sm:gap-24">
                <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-72 mb-20 sm:w-96 sm:mb-0"
                />
                <div className="flex flex-col items-center sm:items-start gap-8">
                    <h1 className="text-3xl font-Poppins ">{item?.title}</h1>
                    <p className="max-w-md">{item?.description}</p>
                    <p className="text-3xl text-accent font-Poppins">
                        Precio: ${item?.precio}
                    </p>
                    <p>Stock: {item?.stock}</p>
                    <ItemCount item={item} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;

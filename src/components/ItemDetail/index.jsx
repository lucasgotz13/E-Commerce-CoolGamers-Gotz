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
            <div className="mt-20 flex justify-center gap-24">
                <img src={item?.image} alt={item?.title} className="w-96" />
                <div className="flex flex-col gap-8">
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

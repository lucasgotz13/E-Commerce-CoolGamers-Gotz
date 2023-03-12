import React from "react";
import Item from "../Item";

function ItemList({ productos }) {
    return (
        <div className="p-20 flex flex-wrap justify-center gap-5">
            {productos.map((producto) => (
                <Item
                    key={producto.id}
                    id={producto.id}
                    name={producto.name}
                    descripcion={producto.descripcion}
                    img={producto.img}
                    precio={producto.precio}
                />
            ))}
        </div>
    );
}

export default ItemList;

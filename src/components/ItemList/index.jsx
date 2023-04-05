import React from "react";
import Item from "../Item";

function ItemList({ productos }) {
    return (
        <div className="p-20 flex flex-wrap justify-center gap-5">
            {productos?.map((producto) => (
                <Item key={producto?.id} {...producto} itemInfo={producto} />
            ))}
        </div>
    );
}

export default ItemList;

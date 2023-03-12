import React, { useEffect, useState } from "react";
import products from "../../mocks/products";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer({ itemId }) {
    const [item, setItem] = useState(null);
    console.log(itemId);

    useEffect(() => {
        const itemPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });

        itemPromise.then((response) => {
            const itemFiltered = response.find(
                (product) => product.id === parseInt(itemId)
            );
            setItem(itemFiltered);
            console.log(itemFiltered);
        });
    }, []);

    return (
        <div className="p-10">
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;

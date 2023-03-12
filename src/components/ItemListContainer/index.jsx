import React, { useState, useEffect } from "react";
import products from "../../mocks/products";
import ItemList from "../ItemList";

function ItemListContainer({ greeting, categoryId, isCategoryRoute }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });

        productsPromise.then((response) => {
            if (isCategoryRoute) {
                const productsFiltered = response.filter(
                    (product) => product.category === categoryId
                );
                setItems(productsFiltered);
                console.log(productsFiltered);
            } else {
                setItems(response);
            }
        });
    }, [categoryId]);

    return (
        <>
            <h1 className="mt-4 text-3xl text-amber-500">{greeting}</h1>
            <ItemList productos={items} />
        </>
    );
}

export default ItemListContainer;

import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList";
import ItemListSkeleton from "../ItemListSkeleton";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";

function ItemListContainer({ categoryId, isCategoryRoute }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        if (isCategoryRoute) {
            const queryResult = query(
                itemsCollection,
                where("category", "==", categoryId)
            );
            getDocs(queryResult)
                .then((snapshot) => {
                    const docs = snapshot.docs;
                    setProducts(
                        docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
                })
                .catch((error) => console.log({ error }));
        } else {
            getDocs(itemsCollection)
                .then((snapshot) => {
                    const docs = snapshot.docs;
                    setProducts(
                        docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
                })
                .catch((error) => console.log({ error }));
        }
    }, [categoryId]);

    if (!products) {
        return <ItemListSkeleton />;
    }

    return (
        <>
            <ItemList productos={products} />
        </>
    );
}

export default ItemListContainer;

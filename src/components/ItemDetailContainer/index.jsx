import React, { useEffect, useState } from "react";
// import products from "../../mocks/products";
import ItemDetail from "../ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetailSkeleton from "../ItemDetailSkeleton";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

function ItemDetailContainer({}) {
    // const { item, setItem } = useContext(CartContext);
    // console.log(itemId);
    const [products, setProducts] = useState(null);
    const params = useParams();

    // useEffect(() => {
    //     const itemPromise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, 1000);
    //     });

    //     itemPromise.then((response) => {
    //         const itemFiltered = response.find(
    //             (product) => product.id === parseInt(itemId)
    //         );
    //         setItem(itemFiltered);
    //         console.log(itemFiltered);
    //     });
    // }, [itemId]);

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     getDocs(itemsCollection)
    //         .then((snapshot) => {
    //             const docs = snapshot.docs;
    //             setProducts(
    //                 docs.map((doc) => {
    //                     return { id: doc.id, ...doc.data() };
    //                 })
    //             );
    //         })
    //         .catch((error) => console.log({ error }));
    // }, []);

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", params.id);

        getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProducts({ id: snapshot.id, ...snapshot.data() });
                    console.log(snapshot.data());
                }
            })
            .catch((err) => console.log({ err }));
    }, []);

    if (!products) {
        return <ItemDetailSkeleton />;
    }
    return (
        <div className="p-10">
            <ItemDetail item={products} />
        </div>
    );
}

export default ItemDetailContainer;

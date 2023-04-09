import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetailSkeleton from "../ItemDetailSkeleton";

function ItemDetailContainer({}) {
    const [products, setProducts] = useState(null);
    const params = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", params.id);

        getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProducts({ id: snapshot.id, ...snapshot.data() });
                    console.log(snapshot.data());
                } else {
                    console.log("No existe el producto");
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

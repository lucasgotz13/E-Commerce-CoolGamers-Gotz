import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Navbar from "../components/Navbar";
import "../index.css";
import { doc, getDoc, getFirestore, collection } from "firebase/firestore";

function Item() {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <Navbar />
            <ItemDetailContainer />
        </div>
    );
}

export default Item;

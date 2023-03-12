import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Navbar from "../components/Navbar";
import "../index.css";

function Item() {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <Navbar />
            <ItemDetailContainer itemId={params.id} />
        </div>
    );
}

export default Item;

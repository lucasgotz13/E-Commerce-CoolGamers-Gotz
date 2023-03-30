import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import "../index.css";

function Root() {
    const params = useParams();
    const isCategoryRoute = Boolean(params.id);

    return (
        <div>
            <Navbar />
            <ItemListContainer
                isCategoryRoute={isCategoryRoute}
                categoryId={params.id}
            />
        </div>
    );
}

export default Root;

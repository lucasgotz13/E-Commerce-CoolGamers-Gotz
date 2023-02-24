import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="Hola! Aca podrian ir los items de la tienda :)" />
        </div>
    );
}

export default App;

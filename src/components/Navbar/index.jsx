import "./Navbar.css";
import CartWidget from "../CartWidget";

function Navbar() {
    return (
        <div className="container">
            <h1>E-Commerce</h1>
            <ul className="categorias">
                <li>
                    <button>PC Armadas</button>
                </li>
                <li>
                    <button>Perifericos</button>
                </li>
                <li>
                    <button>Componentes</button>
                </li>
            </ul>
            <CartWidget value={1} />
        </div>
    );
}

export default Navbar;

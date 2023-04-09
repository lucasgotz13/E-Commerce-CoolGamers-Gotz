import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
    const { cartTotalItems } = useContext(CartContext);

    return (
        <div className="hidden sm:flex items-center gap-2 ">
            <NavLink to={"/cart"}>
                <FiShoppingCart size={30} className="mr-2" />
            </NavLink>
            <p className="text-xl text-primary bg-secondary px-2.5 py-0.5 rounded-full font-Poppins">
                {cartTotalItems}
            </p>
        </div>
    );
}

export default CartWidget;

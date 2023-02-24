import icon from "./cart-4-svgrepo-com.png";

function CartWidget({ value }) {
    return (
        <div className="cart-widget">
            <img src={icon} />
            <p>{value}</p>
        </div>
    );
}

export default CartWidget;

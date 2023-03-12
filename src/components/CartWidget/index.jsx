function CartWidget({ value }) {
    return (
        <div className="hidden sm:flex items-center gap-2">
            <img src="/assets/cart-4-svgrepo-com.png" className="w-10" />
            <p className="text-xl text-primary bg-secondary px-3 py-0.25 rounded-lg font-Poppins">
                {value}
            </p>
        </div>
    );
}

export default CartWidget;

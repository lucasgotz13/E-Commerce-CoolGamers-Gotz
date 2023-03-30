import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handleMenuToggle = () => {
        setMenu(!menu);
    };

    return (
        <>
            <nav className="hidden sm:flex sm:justify-between sm:items-center sm:py-1 sm:px-5 font-Poppins bg-primary shadow-lg sticky top-0 z-20">
                <h1 className="text-2xl text-secondary">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-b-accent" : ""
                        }
                    >
                        CoolGamers
                    </NavLink>
                </h1>
                <ul className="list-none flex justify-between items-center gap-5 mr-24 text-secondary font-bold">
                    <NavLink
                        to={"/category/pc"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-2 border-b-accent bg-white cursor-pointer p-2.5 hover:bg-slate-300 "
                                : "border-none bg-white cursor-pointer p-2.5 hover:bg-slate-300 rounded-md"
                        }
                    >
                        PC
                    </NavLink>
                    <NavLink
                        to={"/category/perifericos"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-2 border-b-accent bg-white cursor-pointer p-2.5 hover:bg-slate-300 "
                                : "border-none bg-white cursor-pointer p-2.5 hover:bg-slate-300 rounded-md"
                        }
                    >
                        Perifericos
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-2 border-b-accent bg-white cursor-pointer p-2.5 hover:bg-slate-300 "
                                : "border-none bg-white cursor-pointer p-2.5 hover:bg-slate-300 rounded-md"
                        }
                        to={"/category/componentes"}
                    >
                        Componentes
                    </NavLink>
                </ul>
                <CartWidget value={1} />
            </nav>
            <nav className="sm:hidden p-2 flex items-center justify-between font-Poppins shadow-lg">
                <h1 className="text-2xl text-secondary font-bold">
                    <NavLink to={"/"}>CoolGamers</NavLink>
                </h1>
                <GiHamburgerMenu
                    className="mr-4"
                    size={25}
                    onClick={handleMenuToggle}
                />
            </nav>
            <ul
                className={
                    menu === true
                        ? "sm:hidden list-none flex flex-col justify-between items-center gap-5  text-secondary"
                        : "hidden"
                }
            >
                <NavLink
                    className={({ isActive }) => (isActive ? "underline" : "")}
                    to={"/category/pc"}
                >
                    <button className="border-none bg-white cursor-pointer p-2.5 hover:bg-slate-300 rounded-md">
                        PC
                    </button>
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "underline" : "")}
                    to={"/category/perifericos"}
                >
                    <button className="border-none bg-white cursor-pointer p-2.5 hover:bg-slate-300 rounded-md">
                        Perifericos
                    </button>
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "underline" : "")}
                    to={"/category/componentes"}
                >
                    <button className="border-none bg-white cursor-pointer p-2.5 hover:bg-slate-300 rounded-md">
                        Componentes
                    </button>
                </NavLink>
            </ul>
        </>
    );
}

export default Navbar;

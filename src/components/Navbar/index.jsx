import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDisclosure, Button, Collapse, Box,  } from "@chakra-ui/react"

function Navbar() {
    const [menu, setMenu] = useState(false);

    const { isOpen, onToggle, onClose } = useDisclosure()

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
            <nav className="sm:hidden p-2 flex flex-col justify-center font-Poppins shadow-lg">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl text-secondary font-bold ml-5">
                        <NavLink
                            to={"/"}
                            onClick={onClose}
                        >
                            CoolGamers
                        </NavLink>
                    </h1>
                    <div className="flex items-center">
                        <NavLink to={"/cart"}>
                            <FiShoppingCart
                                size={25}
                                className="mr-4"
                                onClick={onClose}
                                />
                        </NavLink>
                        <GiHamburgerMenu onClick={onToggle} className="hover:cursor-pointer mr-5" size={20}>Click Me</GiHamburgerMenu>
                    </div>
                </div>
                <div className="">
                    {/* <CartWidget value={1} /> */}
                    {/* <NavLink to={"/cart"}> */}
                    {/*     <FiShoppingCart */}
                    {/*         size={25} */}
                    {/*         className="mr-4" */}
                    {/*         onClick={() => setMenu(menu ? !menu : false)} */}
                    {/*     /> */}
                    {/* </NavLink> */}
                    {/* <GiHamburgerMenu */}
                    {/*     className="mr-4" */}
                    {/*     size={25} */}
                    {/*     onClick={handleMenuToggle} */}
                    {/* /> */}
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                            p='40px'
                            color='black'
                            mt='4'
                            rounded='md'
                            shadow='md'
                            className="flex flex-col justify-center items-center"
                        >
                            <NavLink
                                className={({ isActive }) => (isActive ? "underline" : "")}
                                to={"/category/pc"}
                            >
                                <button
                                    className="border-none bg-white cursor-pointer p-2.5 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md"
                                    onClick={onToggle}
                                >
                                    PC
                                </button>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "underline" : "")}
                                to={"/category/perifericos"}
                            >
                                <button
                                    className="border-none bg-white cursor-pointer p-2.5 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md"
                                    onClick={onToggle}
                                >
                                    Perifericos
                                </button>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "underline" : "")}
                                to={"/category/componentes"}
                            >
                                <button
                                    className="border-none bg-white cursor-pointer p-2.5 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md"
                                    onClick={onToggle}
                                >
                                    Componentes
                                </button>
                            </NavLink>
                        </Box>
                    </Collapse>
                </div>
            </nav>
            {/* <ul */}
            {/*     className={ */}
            {/*         menu === true */}
            {/*             ? "sm:hidden mt-2 list-none flex flex-col justify-between items-center gap-5  text-secondary font-Poppins " */}
            {/*             : "hidden" */}
            {/*     } */}
            {/* > */}
            {/*     <NavLink */}
            {/*         className={({ isActive }) => (isActive ? "underline" : "")} */}
            {/*         to={"/category/pc"} */}
            {/*     > */}
            {/*         <button */}
            {/*             className="border-none bg-white cursor-pointer p-2.5 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md" */}
            {/*             onClick={() => setMenu(!menu)} */}
            {/*         > */}
            {/*             PC */}
            {/*         </button> */}
            {/*     </NavLink> */}
            {/*     <NavLink */}
            {/*         className={({ isActive }) => (isActive ? "underline" : "")} */}
            {/*         to={"/category/perifericos"} */}
            {/*     > */}
            {/*         <button */}
            {/*             className="border-none bg-white cursor-pointer p-2.5 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md" */}
            {/*             onClick={() => setMenu(!menu)} */}
            {/*         > */}
            {/*             Perifericos */}
            {/*         </button> */}
            {/*     </NavLink> */}
            {/*     <NavLink */}
            {/*         className={({ isActive }) => (isActive ? "underline" : "")} */}
            {/*         to={"/category/componentes"} */}
            {/*     > */}
            {/*         <button */}
            {/*             className="border-none bg-white cursor-pointer p-2.5 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md" */}
            {/*             onClick={() => setMenu(!menu)} */}
            {/*         > */}
            {/*             Componentes */}
            {/*         </button> */}
            {/*     </NavLink> */}
            {/* </ul> */}
        </>
    );
}

export default Navbar;

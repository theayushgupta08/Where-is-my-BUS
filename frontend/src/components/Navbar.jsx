import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true"
    );
    const navigate = useNavigate();

    useEffect(() => {
        // Listen for changes in localStorage to update authentication state
        const handleStorageChange = () => {
            const authStatus = localStorage.getItem("isAuthenticated") === "true";
            setIsAuthenticated(authStatus);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        // Clear authentication state and redirect to login
        localStorage.removeItem("isAuthenticated");
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Center-align the logo and text */}
                <div className="flex items-center gap-2 justify-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img src={logo} alt="logo" className="w-10 h-10 border-r-2 rounded-full" />
                        <p className="text-black text-[20px] font-bold cursor-pointer flex">
                            <span className="sm:block hidden text-black">Where is my BUS?</span>
                        </p>
                    </Link>
                </div>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-black-100"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <Link to={nav.link}>{nav.title}</Link>
                        </li>
                    ))}
                    {isAuthenticated && (
                        <li
                            className="text-black-100 hover:text-white text-[18px] font-medium cursor-pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </li>
                    )}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <Link to={nav.link}>{nav.title}</Link>
                                </li>
                            ))}
                            {isAuthenticated && (
                                <li
                                    className="font-poppins font-medium cursor-pointer text-[16px] text-secondary"
                                    onClick={() => {
                                        setToggle(!toggle);
                                        handleLogout();
                                    }}
                                >
                                    Logout
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
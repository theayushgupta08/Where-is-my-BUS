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
    const [userRole, setUserRole] = useState(
        localStorage.getItem("userRole") || ""
    );
    const [username, setUsername] = useState(
        localStorage.getItem("username") || ""
    );
    const navigate = useNavigate();

    useEffect(() => {
        // Function to update authentication state
        const updateAuthState = () => {
            const authStatus = localStorage.getItem("isAuthenticated") === "true";
            const role = localStorage.getItem("userRole") || "";
            const name = localStorage.getItem("username") || "";
            setIsAuthenticated(authStatus);
            setUserRole(role);
            setUsername(name);
        };

        // Check on mount
        updateAuthState();

        // Listen for storage events (from other tabs)
        window.addEventListener("storage", updateAuthState);

        // Listen for custom auth change event (from same tab)
        const handleAuthChange = () => {
            updateAuthState();
        };
        window.addEventListener("authChange", handleAuthChange);

        // Check on window focus (in case localStorage was changed)
        const handleFocus = () => {
            updateAuthState();
        };
        window.addEventListener("focus", handleFocus);

        // Check periodically (fallback)
        const interval = setInterval(updateAuthState, 1000);

        return () => {
            window.removeEventListener("storage", updateAuthState);
            window.removeEventListener("authChange", handleAuthChange);
            window.removeEventListener("focus", handleFocus);
            clearInterval(interval);
        };
    }, []);

    const handleLogout = () => {
        // Clear authentication state and redirect to login
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userRole");
        localStorage.removeItem("username");
        setIsAuthenticated(false);
        setUserRole("");
        setUsername("");
        
        // Dispatch custom event to notify of auth change
        window.dispatchEvent(new Event('authChange'));
        
        navigate("/login");
    };

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 bg-gradient-to-r from-[#050816]/95 via-[#1a1a2e]/95 to-[#16213e]/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Center-align the logo and text */}
                <div className="flex items-center gap-3 justify-center">
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div className="relative">
                            <img src={logo} alt="logo" className="w-12 h-12 rounded-full border-2 border-orange-500/50 group-hover:border-orange-500 transition-all duration-300 shadow-lg" />
                            <div className="absolute inset-0 rounded-full bg-orange-500/20 group-hover:bg-orange-500/30 transition-all duration-300"></div>
                        </div>
                        <p className="text-white text-[22px] font-bold cursor-pointer flex group-hover:text-orange-400 transition-colors duration-300">
                            Where is my <span className="text-orange-500"> BUS</span>?
                        </p>
                    </Link>
                </div>

                <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className="relative"
                            onClick={() => setActive(nav.title)}
                        >
                            <Link 
                                to={nav.link}
                                className={`relative px-3 py-2 text-[16px] font-medium cursor-pointer transition-all duration-300 ${
                                    active === nav.title 
                                        ? "text-orange-500" 
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {nav.title}
                                {active === nav.title && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                                )}
                            </Link>
                        </li>
                    ))}
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link
                                    to="/profile"
                                    className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-300 hover:text-blue-200 text-[16px] font-medium transition-all duration-300"
                                >
                                    My Profile
                                </Link>
                            </li>
                            <li className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 text-[14px] font-semibold capitalize backdrop-blur-sm">
                                {userRole} {username && `(${username})`}
                            </li>
                            <li
                                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-300 hover:text-red-200 text-[16px] font-medium cursor-pointer transition-all duration-300"
                                onClick={handleLogout}
                            >
                                Logout
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link
                                to="/login"
                                className="px-5 py-2 bg-orange-500 hover:bg-orange-600 border border-orange-500/30 rounded-lg text-white text-[16px] font-medium cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                    >
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                        />
                    </button>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-gradient-to-br from-[#050816] to-[#1a1a2e] backdrop-blur-md border border-orange-500/20 absolute top-16 right-0 mx-4 my-2 min-w-[180px] z-50 rounded-xl shadow-2xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className="w-full"
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <Link 
                                        to={nav.link}
                                        className={`block px-3 py-2 rounded-lg font-poppins font-medium cursor-pointer text-[16px] transition-all duration-300 ${
                                            active === nav.title 
                                                ? "text-orange-500 bg-orange-500/10" 
                                                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                                        }`}
                                    >
                                        {nav.title}
                                    </Link>
                                </li>
                            ))}
                            {isAuthenticated ? (
                                <>
                                    <li className="w-full">
                                        <Link
                                            to="/profile"
                                            className="block px-3 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg font-poppins font-medium text-[16px] text-blue-300 hover:text-blue-200 hover:bg-blue-500/30 transition-all duration-300 text-center"
                                            onClick={() => setToggle(!toggle)}
                                        >
                                            My Profile
                                        </Link>
                                    </li>
                                    <li className="w-full px-3 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg font-poppins font-semibold text-[14px] text-orange-400 capitalize">
                                        {userRole} {username && `(${username})`}
                                    </li>
                                    <li
                                        className="w-full px-3 py-2 bg-red-500/20 border border-red-500/30 rounded-lg font-poppins font-medium cursor-pointer text-[16px] text-red-300 hover:text-red-200 hover:bg-red-500/30 transition-all duration-300"
                                        onClick={() => {
                                            setToggle(!toggle);
                                            handleLogout();
                                        }}
                                    >
                                        Logout
                                    </li>
                                </>
                            ) : (
                                <li className="w-full">
                                    <Link
                                        to="/login"
                                        className="block px-3 py-2 bg-orange-500 hover:bg-orange-600 border border-orange-500/30 rounded-lg text-white font-poppins font-medium cursor-pointer text-[16px] text-center transition-all duration-300"
                                        onClick={() => setToggle(!toggle)}
                                    >
                                        Login
                                    </Link>
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
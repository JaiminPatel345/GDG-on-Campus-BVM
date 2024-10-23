import { useState } from "react"
import "../styles/NavBar.css"
import logo from "../assets/gdg_logo.png"
import { Link } from "react-router-dom"

const NavBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }

    const handleMouseLeave = () => {
        setDropdownVisible(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="w-full bg-transparent/20 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="GDG Logo" className="w-12" />
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <button className="text-white focus:outline-none">
                        {/* Hamburger icon (3 bars) */}
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <ul
                    className={`md:flex space-x-6 text-white md:static absolute w-full md:w-auto left-0 bg-gray-800 md:bg-transparent p-4 md:p-0 z-[-1] md:z-auto transition-all duration-300 ease-in ${
                        isMenuOpen ? "top-16 " : "top-[-490px]"
                    }`}
                >
                    <Link to={"/home"}>
                        <li className="nav-item hover:text-gdg-blue">Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="nav-item hover:text-gdg-red">About</li>
                    </Link>
                    <Link to={"/team"}>
                        <li className="nav-item hover:text-gdg-yellow">Team</li>
                    </Link>
                    <Link>
                        <li
                            className="relative nav-item hover:text-gdg-green"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            Flashback{" "}
                            {dropdownVisible && (
                                <div className="dropdown-menu absolute text-white mt-0 rounded-lg z-50">
                                    <ul className="py-2">
                                        <Link to={"/flashback/2023"}>
                                            <li className="dropdown-item">
                                                2023
                                            </li>
                                        </Link>
                                        <Link to={"/flashback/2022"}>
                                            <li className="dropdown-item">
                                                2022
                                            </li>
                                        </Link>
                                        <Link to={"/flashback/2021"}>
                                            <li className="dropdown-item">
                                                2021
                                            </li>
                                        </Link>
                                        <Link to={"/flashback/2020"}>
                                            <li className="dropdown-item">
                                                2020
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </Link>
                    <Link to={"/events"}>
                        <li className="nav-item hover:text-gdg-blue">
                            Events 2024
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className="nav-item hover:text-gdg-red">Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

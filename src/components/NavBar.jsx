import { useState } from "react"
import "../styles/NavBar.css"
import logo from "../assets/gdg_logo.png"
import { Link } from "react-router-dom"

const NavBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false)

    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }

    const handleMouseLeave = () => {
        setDropdownVisible(false)
    }

    return (
        <nav className="w-full bg-transparent/20 shadow-md fixed top-0 z-50">
            <div className="flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="GDG Logo" className="w-12" />
                    </Link>
                </div>

                {/* Navigation links */}
                <ul className="flex space-x-6 text-white ">
                    <Link to={"/home"}>
                        {" "}
                        <li className="nav-item hover:text-gdg-blue">Home</li>
                    </Link>

                    <Link to={"/about"}>
                        <li className="nav-item hover:text-gdg-red">About</li>
                    </Link>

                    <Link to={"/team"}>
                        <li className="nav-item hover:text-gdg-yellow">Team</li>
                    </Link>

                    <li
                        className="relative nav-item hover:text-gdg-green"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Flashback{" "}
                        {dropdownVisible && (
                            <div className="dropdown-menu absolute top-full left-0 bg-gray-800 text-white mt-0 rounded-lg shadow-lg">
                                <ul className="py-2">
                                    <Link to={"/flashback/2023"}>
                                        <li className="dropdown-item">2023</li>
                                    </Link>
                                    <Link to={"/flashback/2022"}>
                                        <li className="dropdown-item">2022</li>
                                    </Link>
                                    <Link to={"/flashback/2021"}>
                                        <li className="dropdown-item">2021</li>
                                    </Link>

                                    <Link to={"/flashback/2020"}>
                                        <li className="dropdown-item">2020</li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </li>
                    <Link to={"/events"}>
                        <li className="nav-item hover:text-gdg-blue">
                            Events 2024
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className="nav-item hover:text-gdg-red">Contact</li>
                    </Link>
                </ul>

                <div className="flex space-x-4"></div>
            </div>
        </nav>
    )
}

export default NavBar

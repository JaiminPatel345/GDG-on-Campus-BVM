/* eslint-disable react/prop-types */
import { useState } from "react"
import {
    FiHome,
    FiUsers,
    FiChevronsRight,
    FiCalendar,
    FiBookOpen,
    FiPhone,
} from "react-icons/fi"
import { MdOutlineEmojiEvents } from "react-icons/md"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="flex bg-gray-900">
            <Sidebar />
        </div>
    )
}

const Sidebar = () => {
    const [open, setOpen] = useState(true) // To toggle the sidebar
    const [selected, setSelected] = useState("Home") // Tracks selected option
    const [flashbackOpen, setFlashbackOpen] = useState(false) // Toggle for Flashback

    return (
        <motion.nav
            layout
            className="sticky top-0 h-screen shrink-0 border-r border-gray-700 bg-gray-800 p-3"
            style={{
                width: open ? "225px" : "fit-content", // Dynamically adjust width
            }}
        >
            {/* Logo and title section */}
            <TitleSection open={open} />
            {/* Menu options */}
            <div className="space-y-2">
                <Option
                    Icon={FiHome}
                    title="Home"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    scrollTo="home" // Added scrollTo prop
                />
                <Option
                    Icon={FiBookOpen}
                    title="About"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    scrollTo="about" // Added scrollTo prop
                />
                <Option
                    Icon={FiUsers}
                    title="Team"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    scrollTo="team" // Added scrollTo prop
                />
                <Option
                    Icon={MdOutlineEmojiEvents}
                    title="Events"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    scrollTo="events" // Added scrollTo prop
                />
                {/* Flashback with sub-options */}
                <motion.div layout>
                    <Option
                        Icon={FiCalendar}
                        title="Flashback"
                        selected={selected}
                        setSelected={setSelected}
                        open={open}
                        onClick={() => {
                            setOpen(true)
                            setFlashbackOpen(!flashbackOpen)
                        }}
                    />
                    {flashbackOpen && open && (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-6 space-y-2"
                        >
                            <Option
                                title="2020"
                                selected={selected}
                                setSelected={setSelected}
                                open={open}
                                isSubOption
                            />
                            <Option
                                title="2021"
                                selected={selected}
                                setSelected={setSelected}
                                open={open}
                                isSubOption
                            />
                            <Option
                                title="2022"
                                selected={selected}
                                setSelected={setSelected}
                                open={open}
                                isSubOption
                            />
                            <Option
                                title="2023"
                                selected={selected}
                                setSelected={setSelected}
                                open={open}
                                isSubOption
                            />
                        </motion.div>
                    )}
                </motion.div>
                <Option
                    Icon={FiPhone}
                    title="Contact"
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    scrollTo="contact" // Added scrollTo prop
                />
            </div>

            {/* Button to toggle open/close */}
            <ToggleClose open={open} setOpen={setOpen} />
        </motion.nav>
    )
}

// Sidebar option component
const Option = ({
    Icon,
    title,
    selected,
    setSelected,
    open,
    onClick,
    isSubOption,
    scrollTo, // Added scrollTo prop
}) => {
    const handleClick = () => {
        if (onClick) onClick() // Handle toggle for Flashback
        else {
            setSelected(title) // Select menu option
            if (scrollTo) {
                const section = document.getElementById(scrollTo)
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" }) // Scroll to section
                }
            }
        }
    }

    return (
        <motion.button
            layout
            onClick={handleClick}
            className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
                selected === title
                    ? "bg-blue-900 text-blue-300"
                    : "text-gray-400 hover:bg-gray-700"
            } ${isSubOption ? "ml-4" : ""}`} // Add left margin for sub-options
        >
            {/* Icon for main options (hide for sub-options) */}
            {!isSubOption && (
                <motion.div
                    layout
                    className="grid h-full w-10 place-content-center text-lg"
                >
                    <Icon />
                </motion.div>
            )}

            {/* Title (if sidebar is open) */}
            {open && (
                <motion.span
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125 }}
                    className={`text-xs font-medium ${
                        isSubOption ? "ml-2" : ""
                    }`} // Adjust spacing for sub-options
                >
                    {title}
                </motion.span>
            )}
        </motion.button>
    )
}

// Title section with logo
const TitleSection = ({ open }) => {
    return (
        <div className="mb-4 border-b border-gray-700 pb-3">
            <div className="flex items-center justify-between rounded-md">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Logo />
                    {open && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.125 }}
                        >
                            <span className="block text-xs font-semibold text-white">
                                GDG on Campus
                            </span>
                            <span className="block text-xs text-gray-400">
                                BVM
                            </span>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

// Placeholder logo component
const Logo = () => {
    return (
        <motion.div
            layout
            className="grid size-10 shrink-0 place-content-center rounded-md bg-gray-700"
        >
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        </motion.div>
    )
}

// Button to close the sidebar
const ToggleClose = ({ open, setOpen }) => {
    return (
        <motion.button
            layout
            onClick={() => setOpen((prev) => !prev)}
            className="absolute bottom-0 left-0 right-0 border-t border-gray-700 transition-colors hover:bg-gray-700"
        >
            <div className="flex items-center p-2">
                <motion.div
                    layout
                    className="grid size-10 place-content-center text-lg"
                >
                    <FiChevronsRight
                        className={`text-gray-400 transition-transform ${
                            open && "rotate-180"
                        }`}
                    />
                </motion.div>
                {open && (
                    <motion.span
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.125 }}
                        className="text-xs font-medium text-gray-400"
                    >
                        Hide
                    </motion.span>
                )}
            </div>
        </motion.button>
    )
}

export default Navbar

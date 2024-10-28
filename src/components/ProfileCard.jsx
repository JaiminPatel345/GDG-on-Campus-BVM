/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaGithub } from "react-icons/fa6"
import "../styles/ProfileCard.css"

const ProfileCard = ({
    imageUrl,
    name,
    role,
    linkedinUrl,
    gmailUrl,
    githubUrl,
}) => {
    const [fill, setFill] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        let intervalId

        if (isHovered && fill < 100) {
            intervalId = setInterval(() => {
                setFill((prev) => Math.min(prev + 100 / 10, 100)) // Fill in 1 second
            }, 100)
        } else if (!isHovered) {
            setFill(0)
            setShowText(false)
        }

        return () => clearInterval(intervalId)
    }, [isHovered, fill])

    useEffect(() => {
        if (fill >= 100) {
            const timeoutId = setTimeout(() => {
                setShowText(true)
            }, 400) // Delay for text appearance

            return () => clearTimeout(timeoutId)
        }
    }, [fill])

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setFill(0)
        setShowText(false)
    }

    return (
        <motion.div
            className="profile-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={imageUrl}
                alt={`${name} profile`}
                className="profile-image"
            />
            <div className="overlay">
                <div className="content">
                    <h3 className="name">
                        {name}
                        <span
                            className="green-line"
                            style={{ transform: `scaleX(${fill / 100})` }} // Scale based on fill
                        />
                    </h3>
                    {showText && (
                        <div className="flex flex-col gap-5 mt-4">
                            <p className="role">{role}</p>
                            <div className="social-links">
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#55acee] hover:text-[#439fe6]"
                                >
                                    <FaLinkedin size="2em" />
                                </a>
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#f1f1f1] hover:text-[#b1b1b1]"
                                >
                                    <FaGithub size="2em" />
                                </a>
                                <a
                                    href={`mailto:${gmailUrl}`}
                                    className="text-[#E95F54] hover:text-[#b43b33]"
                                >
                                    <SiGmail size="2em" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProfileCard

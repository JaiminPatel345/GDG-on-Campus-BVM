/* eslint-disable react/prop-types */
import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaGithub } from "react-icons/fa6"

const ProfileCard = ({
    imageUrl,
    name,
    role,
    linkedinUrl,
    gmailUrl,
    githubUrl,
}) => {
    // State to track the mouse position and card rotation + shadow direction
    const [cardEffect, setCardEffect] = useState({
        rotateX: 0,
        rotateY: 0,
        shadowX: 0,
        shadowY: 0,
    })

    // Function to handle mouse movement and update rotation + shadow
    const handleMouseMove = (e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const midX = rect.width / 2
        const midY = rect.height / 2

        // Calculate the rotation and shadow based on mouse position relative to the center of the card
        const rotateY = (x - midX) / 10
        const rotateX = -(y - midY) / 10
        const shadowX = (x - midX) / 15
        const shadowY = (y - midY) / 15

        setCardEffect({ rotateX, rotateY, shadowX, shadowY })
    }

    // Reset the card position and shadow when the mouse leaves the card area
    const handleMouseLeave = () => {
        setCardEffect({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0 })
    }

    return (
        <motion.div
            className="relative w-72 h-96 overflow-hidden rounded-lg shadow-lg group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: cardEffect.rotateX, // Apply the calculated X rotation
                rotateY: cardEffect.rotateY, // Apply the calculated Y rotation
                transition: { duration: 0.1 }, // Smooth transition for real-time updates
            }}
            // Apply shadow based on the mouse movement
            style={{
                boxShadow: ` ${cardEffect.shadowX}px ${cardEffect.shadowY}px 20px rgba(255, 255, 255, 0.3)`,
                perspective: 1000,
            }}
        >
            {/* Profile Image */}
            <img
                src={imageUrl}
                alt={`${name} profile`}
                className="w-full h-full object-cover"
            />

            {/* Overlay with Name, Role, and Links */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md flex flex-col items-center justify-center">
                <h3 className="text-2xl text-white font-bold mb-2">{name}</h3>
                <p className="text-lg text-gray-300 mb-4">{role}</p>

                {/* Social Links */}
                <div className="flex space-x-4">
                    {/* LinkedIn Link */}
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 pt-7"
                    >
                        <FaLinkedin size="2em" />
                    </a>

                    <a
                        href={`${githubUrl}`}
                        className="text-white hover:text-white/40  pt-7"
                    >
                        <FaGithub size="2em" />
                    </a>

                    {/* Gmail Link */}
                    <a
                        href={`mailto:${gmailUrl}`}
                        className="text-red-500 hover:text-red-400 pt-7"
                    >
                        <SiGmail size="2em" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProfileCard

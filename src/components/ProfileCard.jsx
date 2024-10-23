import React, { useState } from "react"
import { motion } from "framer-motion"

const ProfileCard = ({ imageUrl, name, role, linkedinUrl, gmailUrl }) => {
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
                        className="text-blue-500 hover:text-blue-400"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.236 19H4V9.328h3.236V19zM5.635 8.143c-.964 0-1.742-.776-1.742-1.736 0-.962.778-1.736 1.742-1.736.964 0 1.741.775 1.741 1.736 0 .96-.778 1.736-1.741 1.736zM20 19h-3.234v-5.608c0-1.344-.478-2.26-1.678-2.26-.916 0-1.462.61-1.701 1.201-.087.21-.108.506-.108.8V19H10.08V9.328h3.087v1.307h.041c.416-.673 1.155-1.633 2.81-1.633 1.996 0 3.491 1.304 3.491 4.103V19z"></path>
                        </svg>
                    </a>

                    {/* Gmail Link */}
                    <a
                        href={`mailto:${gmailUrl}`}
                        className="text-red-500 hover:text-red-400"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 12.713L0 5.15V19a5 5 0 005 5h14a5 5 0 005-5V5.15l-12 7.563zM12 0L0 7.499V4.6a5 5 0 015-5h14a5 5 0 015 5v2.899L12 0z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProfileCard

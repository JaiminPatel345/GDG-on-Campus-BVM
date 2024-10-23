/* eslint-disable react/prop-types */
// import React from "react"
import { motion } from "framer-motion"

// Replace cn with a simple class name joiner function if needed or use a library like classnames
const cn = (...classes) => classes.filter(Boolean).join(" ")

export function LetterPullup({ className, words, delay }) {
    const letters = words.split("")

    const pullupVariant = {
        initial: { y: 100, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
            },
        }),
    }

    return (
        <div className="flex justify-center">
            {letters.map((letter, i) => (
                <motion.h1
                    key={i}
                    variants={pullupVariant}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className={cn(
                        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]",
                        className
                    )}
                >
                    {letter === " " ? <span>&nbsp;</span> : letter}
                </motion.h1>
            ))}
        </div>
    )
}

export default LetterPullup

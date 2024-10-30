/* eslint-disable react/prop-types */
"use client"

import { cn } from "../../lib/utils"
import React, { useEffect, useState } from "react"
import { CardSpotlight } from "./card-spotlight"
import { ThreeDCardDemo } from "./3d-card"
export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = React.useRef(null)
    const scrollerRef = React.useRef(null)

    useEffect(() => {
        addAnimation()
    }, [])

    const [start, setStart] = useState(false)

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            // Duplicate items for infinite scroll effect
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                scrollerRef.current.appendChild(duplicatedItem)
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            )
        }
    }

    const getSpeed = () => {
        if (containerRef.current) {
            const durationMap = {
                fast: "20s",
                normal: "40s",
                slow: "80s",
            }
            containerRef.current.style.setProperty(
                "--animation-duration",
                durationMap[speed] || "40s"
            )
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-14  w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <CardSpotlight
                        className="z-50 h-full"
                        key={idx} // Use idx as key for simplicity; consider using a unique ID if available
                    >
                        <ThreeDCardDemo
                            title={item.title}
                            description={item.description}
                            imgUrl={item.imgUrl}
                            learnUrl={item.learnUrl}
                            // registerUrl={item.registerUrl}
                        />
                    </CardSpotlight>
                ))}
            </ul>
        </div>
    )
}

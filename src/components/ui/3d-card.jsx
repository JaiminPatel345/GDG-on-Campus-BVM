/* eslint-disable react/prop-types */
"use client"
import { cn } from "../../lib/utils"
import { createContext, useState, useContext, useRef, useEffect } from "react"

const MouseEnterContext = createContext(undefined)

export const CardContainer = ({ children, className, containerClassName }) => {
    const containerRef = useRef(null)
    const [isMouseEntered, setIsMouseEntered] = useState(false)

    const handleMouseMove = (e) => {
        if (!containerRef.current) return
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / 25
        const y = (e.clientY - top - height / 2) / 25
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    }

    const handleMouseEnter = (e) => {
        setIsMouseEntered(true)
        if (!containerRef.current) return
    }

    const handleMouseLeave = (e) => {
        if (!containerRef.current) return
        setIsMouseEntered(false)
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    }
    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn(
                    "py-20 flex items-center justify-center",
                    containerClassName
                )}
                style={{
                    perspective: "1000px",
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear",
                        className
                    )}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    )
}

export const CardBody = ({ children, className }) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    )
}

export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}) => {
    const ref = useRef(null)
    const [isMouseEntered] = useMouseEnter()

    useEffect(() => {
        handleAnimations()
    }, [isMouseEntered])

    const handleAnimations = () => {
        if (!ref.current) return
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
        }
    }

    return (
        <Tag
            ref={ref}
            className={cn(
                "w-fit transition duration-200 ease-linear",
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    )
}

// Create a hook to use the context
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext)
    if (context === undefined) {
        throw new Error(
            "useMouseEnter must be used within a MouseEnterProvider"
        )
    }
    return context
}

export const ThreeDCardDemo = ({
    title,
    description,
    imgUrl,
    learnUrl,
    registerUrl,
}) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={imgUrl}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={learnUrl}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                        Learn More →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="a"
                        target="_blank"
                        href={registerUrl}
                        className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                    >
                        Register
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}
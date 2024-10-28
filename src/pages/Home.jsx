import React from "react"
import "../styles/general.css"
import { Boxes } from "../components/ui/background-boxes"
import { cn } from "../lib/utils"
import Logo from "/logo_home.png"

const Home = () => {
    return (
        <div
            className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg"
            id="HomePage"
        >
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                Google Developers Groups On Campus
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                Birla Vishvakarma Mahavidyalaya
            </p> */}
            <img src={Logo} alt="GDGC BVM" className="h-40 relative z-20" />
        </div>
    )
}

export default Home

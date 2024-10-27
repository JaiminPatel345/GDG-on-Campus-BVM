import NavBar from "./components/NavBar" // Import the NavBar component
import { Home, About, Events, Contact, Team, Flashback } from "./pages"

const App = () => {
    return (
        <>
            <div className=" flex  h-screen w-screen object-cover overflow-y-auto overflow-x-hidden">
                <NavBar />
                <div className="h-full w-full object-cover overflow-y-auto overflow-x-hidden">
                    <div id="home">
                        <Home />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                    <div id="events">
                        <Events />
                    </div>
                    <div id="team">
                        <Team />
                    </div>
                    <div id="flashback">
                        <Flashback />
                    </div>

                    <div id="contact">
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

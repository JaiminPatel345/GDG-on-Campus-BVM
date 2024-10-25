import NavBar from "./components/NavBar" // Import the NavBar component
import { Home, About, Events, Contact, Team, Flashback } from "./pages"

const App = () => {
    return (
        <>
            <div className=" flex  h-screen w-screen object-cover overflow-y-auto overflow-x-hidden">
                <NavBar />
                <div className="h-full w-full object-cover overflow-y-auto overflow-x-hidden">
                    <Home id="home"></Home>
                    <About id="about"></About>
                    <Team id="team"></Team>
                    <Events id="events"></Events>
                    <Flashback></Flashback>
                    <Contact id="contact"></Contact>
                </div>
            </div>
        </>
    )
}

export default App

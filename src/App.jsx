import NavBar from "./components/NavBar" // Import the NavBar component
import { Home, About, Events, Contact, Team, Flashback } from "./pages"

const App = () => {
    return (
        <>
        <div className=" flex  h-screen w-screen object-cover overflow-y-auto overflow-x-hidden">
            <NavBar />
            <div className="h-full w-full object-cover overflow-y-auto overflow-x-hidden">
                <Home></Home>
                <About></About>
                <Events></Events>
                <Contact></Contact>
                <Team></Team>
                <Flashback></Flashback>

            </div>
            
        </div>
        </>
    )
}

export default App

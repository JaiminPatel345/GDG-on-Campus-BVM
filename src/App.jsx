import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar" // Import the NavBar component
import { Home, About, Events, Contact, Team, Flashback } from "./pages"
import { Outlet } from "react-router-dom" // For nested routes

const App = () => {
    return (
        <Router>
            <NavBar /> {/* Always displayed */}
            <Routes>
                {/* Define routes here */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/flashback" element={<Flashback />}>
                    {/* Nested routes under flashback */}
                    {/* <Route
                        path="2023"
                        element={<FlashbackYear year="2023" />}
                    />
                    <Route
                        path="2022"
                        element={<FlashbackYear year="2022" />}
                    />
                    <Route
                        path="2021"
                        element={<FlashbackYear year="2021" />}
                    />
                    <Route
                        path="2020"
                        element={<FlashbackYear year="2020" />}
                    /> */}
                </Route>
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App

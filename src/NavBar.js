import { Link } from "react-router-dom"

const NavBar = () => {
    return <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/newDream">New Text Entry</Link>
        <Link to="/allDreams">All Entries</Link>
        <Link to="/resources">Resources</Link>
    </div>
}

export default NavBar;
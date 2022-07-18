import { Link } from "react-router-dom"

const NavBar = () => {
    return <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/allDreams">All Entries</Link>
        <Link to="/newDreamText">New Text Entry</Link>
        <Link to="/newDreamSpeech">New Speech Entry</Link>
        <Link to="/resources">Resources</Link>
    </div>
}

export default NavBar;
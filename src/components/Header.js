import {Link} from "react-router-dom";

function Header (props) {
    return (
        <div className="header">
            <h1>Rope Burn Distortion</h1>
            <div className="header-links">

            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>
            <Link to="/download">
                <h3>download</h3>
            </Link>
            </div>
        </div>

    )
}

export default Header;
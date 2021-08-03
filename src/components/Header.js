import {Link} from "react-router-dom";

function Header (props) {
    return (
        <div className="header">
            <div className="image1">
            <img className="palm" src="https://images.unsplash.com/photo-1612363287209-bdfebf9ff660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="palm" />
            </div>
            <div className="header-middle-block">
            <div className="title">
            <h1 className="title-text">Rope Burn Distortion</h1>

            </div>
            <div className="header-links">

            <Link 
            style={{
                textDecoration: "none"
            }}
            to="/">
                <div className="link-button">Home</div>
            </Link>
            <Link 
              style={{
                  textDecoration: "none"
                }}
                to="/about">
                <div className="link-button">About</div>
            </Link>
            <Link 
              style={{
                  textDecoration: "none"
                }}
                to="/download">
                <div className="link-button">download</div>
            </Link>
            </div>
                </div>
            <div className="image1 right">
                <img className="palm" src="https://images.unsplash.com/photo-1612363287209-bdfebf9ff660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="palm" />
            </div>
        </div>

    )
}

export default Header;
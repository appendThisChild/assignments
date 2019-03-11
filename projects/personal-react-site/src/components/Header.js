import React from "react"
import { Link } from "react-router-dom";

const Header = (props) => {

    return(
        <div>
            <div className="header">
                <header>
                    <Link to="/">
                        <img alt="" className={"logo"} src="https://upload.wikimedia.org/wikipedia/de/thumb/2/2e/Studio_Ghibli_Logo.svg/2000px-Studio_Ghibli_Logo.svg.png" /> 
                    </Link>
                </header>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Films">Films</Link>
                <Link to="/submissions">Script Submissions</Link>
            </nav>
        </div>
    )
}

export default Header;
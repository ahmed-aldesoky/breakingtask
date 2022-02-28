import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg text-info  bg-dark">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
{                   
}                    <Link className="nav-item nav-link text-info" to={"*"}>Home</Link>
                    
                </div>
            </div>
        </nav>

    )
}

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar
import { Link } from 'react-router-dom';
import '../app.css';


const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className='container'>
            <Link to="/" className="navbar-brand">
                ExcerTracker
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">
                            Exercises
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">
                            Create Exercises Log
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">
                            Create User
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
    
}

export default Navbar;
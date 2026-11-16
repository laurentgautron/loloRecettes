import './Header.css';
import Research from '../Research/Research';
import { NavLink } from 'react-router';


function Header() {
    return (
        <div className='banner'>
            <div className="navigation">
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/shopping">Courses</NavLink>
                    <NavLink to="/planning">Planning</NavLink>
                </nav>
            </div>
            <h1>Recettes à Lolo</h1>
            <Research />
        </div>
    )
}

export default Header
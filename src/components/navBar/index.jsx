import { NavLink } from 'react-router-dom';
import './navBar.css'

function NavBar() {
    return(
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/livros'>Livros</NavLink>
                <NavLink to='/filmes'>Filmes</NavLink>
            </nav>
        </>
    )
}

export default NavBar;
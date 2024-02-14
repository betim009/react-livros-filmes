import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h3>
                Página não encontrada
            </h3>
            <Link to='/'> Página Principal</Link>
        </>
    )
}

export default NotFound;
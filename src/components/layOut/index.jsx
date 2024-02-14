import { Outlet } from "react-router-dom";
import NavBar from "../navBar";



function LayOut() {
    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default LayOut;
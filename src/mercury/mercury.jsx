import Nav from "../nav";
import { Outlet } from "react-router-dom";
const mercury = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
    );
};

export default mercury;
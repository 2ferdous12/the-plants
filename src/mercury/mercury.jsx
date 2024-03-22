import Nav from "../nav";
import { Outlet } from "react-router-dom";
import Mer from "./mer";
const mercury = () => {
    return (
        <div>
            <Nav></Nav>
            <Mer></Mer>
            <Outlet></Outlet>
        </div>
    );
};

export default mercury;
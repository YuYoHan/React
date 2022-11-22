import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Todolist from "../pages/Todolist";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={"/"} element={<SignUp />} /> */}
                <Route path={"/"} element={<Todolist />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;

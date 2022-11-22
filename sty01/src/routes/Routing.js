import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;

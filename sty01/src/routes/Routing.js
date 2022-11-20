import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import State from "../pages/hooks/useState";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/1"} element={<State />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;

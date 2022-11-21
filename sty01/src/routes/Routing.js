import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState2 from "../../../sty01/src/pages/hooks/useState2";
import HomePage from "../pages/Home";
import State from "../pages/hooks/useState";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={"/1"} element={<State />} /> */}
                <Route path={"/2"} element={<UseState2 />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;

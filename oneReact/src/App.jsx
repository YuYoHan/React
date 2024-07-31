import "./App.css";
import { useState } from "react";
// 사용하려는 파일에서
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
    return (
        <>
            <Bulb />
            <Counter />
        </>
    );
}

export default App;

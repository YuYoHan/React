import "./App.css";
import { useState } from "react";

function App() {
    const [state, setState] = useState(0);
    console.log(state);

    return (
        <>
            <h1>{state}</h1>
            <button
                onClick={() => {
                    setState(state + 1);
                }}
            >
                +
            </button>
        </>
    );
}

export default App;

import React from "react";

function App() {
    const number = 1;
    const double = (number) => {
        return number * 2;
    };

    return (
        <div>
            <div>{double(number)}</div>;<button>Submit</button>
        </div>
    );
}

export default App;

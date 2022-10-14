import { userState } from "react";

function App() {
    const [number, setNumber] = userState(1);
    const [number1, setNumber1] = userState(1);

    const double = () => {
        const doubledNumber = number * 2;
        setNumber(doubledNumber);
        setNumber1(number1 * 2);
        console.log(doubledNumber);
    };

    return (
        <>
            <box>{number}</box>
            <button onClick={double}>submit</button>
        </>
    );
}

export default App;

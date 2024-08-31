import React from "react";
import { useState, useRef } from "react";

function UseRef02() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    console.log(countRef);
    console.log("랜더링");

    const increaseCountState = () => {
        setCount(count + 1);
    };

    const increaseCountRef = () => {
        console.log("Ref: " + countRef.current);
        countRef.current = countRef.current + 1;
    };

    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountState}>state 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
        </div>
    );
}

export default UseRef02;

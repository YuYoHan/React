import React, { useEffect, useRef, useState } from "react";

function UseEffect03() {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current += 1;
        console.log("랜더링 수 : " + renderCount.current);
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
        </div>
    );
}

export default UseEffect03;

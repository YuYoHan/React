import { useState } from "react";

function State() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <>
            <main>
                <div>{count}</div>
                <button onClick={increase}>증가</button>
            </main>
        </>
    );
}
export default State;

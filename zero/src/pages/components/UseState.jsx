import { useState } from "react";

const UseState = () => {
    // let count = 0;
    const [count, setCount] = useState(0);
    const [name, setName] = useState("트와이스");

    const onAddNumber = () => {
        // set함수로서 state 값을 변경
        setCount(count + 1);
    };

    const onRemoveNumber = () => {
        setCount(count - 1);
    };

    const onChangeName = () => {
        setName("ive");
    };

    return (
        <>
            <div>
                <button onClick={onAddNumber}>+</button>
                {count}
                <button onClick={onRemoveNumber}>-</button>
            </div>
            <div>
                {name}
                <br />
                <button onClick={onChangeName}>change</button>
                <br />
            </div>
        </>
    );
};
export default UseState;

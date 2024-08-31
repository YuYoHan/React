import { useState } from "react";

const UseState01 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("안유진");

    /*
        useState는 변수를 react의 state로 관리하는 hook 함수
        state로 관리하고 있는 함수는 일반적인 방법으로 제대입(초기화) 불가능
        오리지 set함수를 통해 state 값을 변경가능하다.
    */

    const onAddNumber = () => {
        // set함수로 useState 값을 변경
        setCount(count + 1);
    };

    const onRemoveNumber = () => {
        setCount(count - 1);
    };

    const onChange = () => {
        setName(name + "♥");
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
                <hr />
                <button onClick={onChange}>change</button>
            </div>
        </>
    );
};

export default UseState01;

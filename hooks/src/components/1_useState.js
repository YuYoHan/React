import { useState } from "react";

const UseState = () => {
    // let count = 0;
    const [count, setCount] = useState(0);
    /*
        useState는 변수를 react의 state로 관리하는 훅함수
        state로 관리하고 있는 함수는 일반적인 방법으로 재대입(초기화) x
        오로지 set함수를 통해서만 state값을 변경 가능

        ex)
        const [state명, set함수명] = useState(기본값)
    */

    const onAddNumber = () => {
        // count += 1;
        // console.log(count);
        // set함수() → () 안의 값으로 state 값을 변경
        setCount(count + 1);
    };

    const onRemoveNumber = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={onAddNumber}>+</button>
            {count}
            <button onClick={onRemoveNumber}>-</button>
        </div>
    );
};
export default UseState;

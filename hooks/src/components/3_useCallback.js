/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState, useCallback } from "react";

function callBack() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    // number에 의존성을 주어서 바뀌면 콘솔이 출력
    const someFuntion = useCallback(() => {
        console.log(`someFunc: number: ${number}`);
        return;
    }, [number]);

    // someFuntion에 의존성을 주고 이게 바뀌면 콘솔이 나온다.
    // someFuntion이 바뀌지 않으면 콘솔은 처음에만 나오고 나오지 않는다.
    useEffect(() => {
        console.log(`someFunction이 변경되었습니다.`);
    }, [someFuntion]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>
                {toggle.toString()}
            </button>
            <br />
            <button onClick={someFuntion}>Call someFunc</button>
        </div>
    );
}

export default callBack;

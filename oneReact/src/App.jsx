import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    /**   첫번쨰 인수에는 콜백함수, 두번째 인수에는 배열
     *    이렇게 하면 useEffect는 두번째 인수가 변경이
     *    일어나면 첫번째 인수인 콜백함수를 실행해준다.
     *
     */

    // 1. 마운트 : 탄생
    useEffect(() => {
        console.log("mount");
    }, []);
    // 2. 업데이트 : 변화, 리렌더링
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });
    // 3. 언마운트 : 죽음
    useEffect(() => {
        console.log(`count : ${count}`);
    }, [count]);

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller />
            </section>
        </div>
    );
}

export default App;

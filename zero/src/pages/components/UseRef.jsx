import { useRef, useState } from "react";

function UseRef() {
    const ref = useRef(null);
    let count = useRef(0);
    const [state, setState] = useState(false);

    const onChangeColor = () => {
        // ref 내부의 값을 보려면 .current를 사용해야 한다.
        console.log(ref.current);
        // 실제 DOM에 접근하기 때문에 바꿀 수 있다.
        count.current += 1;
        ref.current.style.color = "red";
    };
    const onChangeColor2 = () => {
        count.current += 1;
        // html의 ref 속성을 통해 DOM에 접근하고
        // ref 내부 값을 변환하기 위해서 current 사용
        ref.current.style.color = "blue";
    };

    const onAddCount = () => {
        // prev → 반환값 = 기존의 state 값
        // ↓의 의미는 기존값에서 반대되는 값으로 바꿔준다는 것이다.
        setState((prev) => !prev);
    };

    console.log(count);

    return (
        <>
            <div ref={ref}>useRef</div>
            <button onClick={onChangeColor}>Red 색상 변경</button> <br />
            <button onClick={onChangeColor2}>Blue 색상 변경</button> <br />
            <button onClick={onAddCount}>강제 랜더링</button>
        </>
    );
}
export default UseRef;

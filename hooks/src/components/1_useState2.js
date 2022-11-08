import { useEffect, useState } from "react";
import Timer from "./5_useEffect2";

// useEffect는 렌더링될 때마다 실행되고 있지만 dependecy Array(두 번째 인자)에
// count를 입력하여 count가 변할때만 useEffect가 실행되는 예제입니다.

function UseState2() {
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>
                토글 타이머
            </button>
        </div>
    );
}
export default UseState2;

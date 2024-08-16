import { useReducer } from "react";

// reducer : 변환기
// → 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}

const Exam = () => {
    // dispatch : 발송하다, 급송하다.
    // → 상태 변화가 있어야 한다는 사실을 알리는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    // 이 버튼이 클릭이 되면 dispatch가 동작해서
    // reducer에게 action 부분에 매개변수로 값을 넘겨준다.
    const onClickPlus = () => {
        // 인수 : 상태가 어떻게 변화되길 원하는지
        dispatch({
            // 상태를 어떻게 변화시키길 원하는지 적는다.
            // type : "INCREASE" → 증가시키다.
            // 이것을 액션 객체라고 한다.
            type: "INCREASE",
            data: 1,
        });
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <br />
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;

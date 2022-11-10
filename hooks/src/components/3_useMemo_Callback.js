import { useCallback, useMemo, useState } from "react";

function UseMemoCallback() {
    const [color, setColor] = useState("red");
    const [memo, setMemo] = useState(true);

    // 즉시 실행
    // useMemo는 연산
    const text = useMemo(() => {
        console.log("안녕하세요");
        if (memo) {
            return "useMemo 입니다.";
        }
        return "useCallback 입니다.";
    }, [memo]);

    /**
     * useMemo(() => []) ← 의존성 배열
     *
     * []를 의존성 배열이라고 부르는데 이 내부의 변수 혹은 상수의 값이 바뀌어야만
     * 해당 함수를 다시 연산, 그 외의 경우에는 연산하지 않음 (기존값 유지)
     */

    // useCallback은 함수자체를 가지고 있는 것
    // useCallback은 연산의 문제가 아닌 선언의 문제, 함수 저장소
    const onChangeText = useCallback(() => {
        // 기존의 값에서 반대되는 것을 바꿔준다는 의미이다.
        // true에서 반대되는 것이 false이므로 한번 누르면 true → false
        // 또 누르면 false → true
        // setMemo((prev) => !prev);

        // memo가 true인 상태로 스코프에 등록 그리고 해당 값을 유지 재선언하지 않고
        // 따라서 memo에 의하여 함수 기능이 변경되는 경우에는 의존성 배열에 값을 추가
        if (memo) {
            return setMemo(false);
        }
        return setMemo(true);
    }, [memo]);

    /**
     *  memo와 callback의 차이점은 memo는 연산 후 값이 저장
     *  callback은 함수를 저장하는 것이기 때문에 해당 함수를 사용해야 한다.
     */

    return (
        <>
            <div>{text}</div>
            <button onClick={onChangeText}> 텍스트 변경 </button>
        </>
    );
}

export default UseMemoCallback;

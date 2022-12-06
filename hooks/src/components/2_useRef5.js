import { useEffect, useRef } from "react";

function Ref5() {
    const inputRef = useRef();

    useEffect(() => {
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const onLogin = () => {
        alert(`환영합니다. ${inputRef.current.value}!`);
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={onLogin}>로그인</button>
        </div>
    );
}
export default Ref5;

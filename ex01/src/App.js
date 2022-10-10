import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // text는 기존의 text, setText는 바꿔줄 것이다.
    // useState() 이 안에 들어갈것은 기존의 텍스트
    const [text, setText] = useState("로그인해주세요");

    // form은 항상 보내고 나면 리플레쉬를 하는데
    // (event) => {event.preventDefault()}
    // 이거를 하게되면 고유의 동작을 멈추게 해준다.
    const onSubmit = (event) => {
        event.preventDefault();
        alert("로그인 했습니다!");
        setText("Coder님 어서오세요~");
        console.log(userName, password);
    };

    const onKeyUp = (event) => {
        // 엔터 키코드는 13이므로
        // 엔터를 누르면 onSubmit()함수가 실행된다.
        if (event.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br />
                <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
            <br /> <br />
            <span>{text}</span>
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Editor from "./components/Editor";
import Header from "./components/Header";

// 중복으로 생성되지 않게 외부에서 생성
const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "설거지하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "OAuth2.0 공부하기",
        date: new Date().getTime(),
    },
];
function App() {
    const [todos, setTodos] = useState(mockData);

    return (
        <div className="App">
            <Header />
            <Editor />
            <List />
        </div>
    );
}

export default App;

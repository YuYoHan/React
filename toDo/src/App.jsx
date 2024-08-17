import { useState, useRef, useReducer } from "react";
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

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                item.id === action.targetId
                    ? { ...item, isDone: !item.isDone }
                    : item
            );
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    // 3으로 설정한 이유는 위에 마지막 id가 2이므로
    // 곂치지 않게 3으로 설정
    const idRef = useRef(3);

    // Editor에서 받은 content로 새로운 내용을 만든다.
    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    };

    const onUpdate = (targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId,
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        });
    };

    return (
        <div className="App">
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;

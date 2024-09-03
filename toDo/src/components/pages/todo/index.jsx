import {
    useState,
    useRef,
    useReducer,
    useCallback,
    createContext,
    useMemo,
} from "react";
import "../../../App.css";
import List from "../../pages/todo/components/list/List";
import Editor from "../../pages/todo/components/editor/Editor";
import Header from "../../pages/todo/components/header/Header";

// 중복으로 생성되지 않게 외부에서 생성
const mockData = [];

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

// context 내용을 내보냄
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function TodoPage() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    // 데이터의 마지막 ID를 찾아서 그 다음 ID로 설정
    const initialId =
        mockData.length > 0 ? mockData[mockData.length - 1].id + 1 : 1;
    const idRef = useRef(initialId);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId,
        });
    }, []);

    // useCallback에 의해서 마운트 됐을 때만 리렌더링 된다.
    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        });
    }, []);

    // 이렇게 처리하면 TodoDispatchContext로 오는것은
    // 리렌더링하지 않는다.
    const memoizedDispatch = useMemo(() => {
        return { onCreate, onUpdate, onDelete };
    }, []);

    return (
        <div className="App">
            <Header />
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor />
                    <List />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default TodoPage;

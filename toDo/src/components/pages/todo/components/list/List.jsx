import "./styles/List.css";
import TodoItem from "../todoitem/TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../../../todo/index";

const List = () => {
    // 이전에는 객체로 받아왔기 때문에 구조분해할당으로 처리해도 됐지만
    // 이제는 value로 그대로 전달받았기 때문에 todos로 처리해야 한다.
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        // 배열의 모든 item을 순회하면서 연산의 결과 값이 true만 반환한다.
        // content에 검색한 search를 포함하는 item만 return
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    // 의존성 배열 : deps
    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);

    // const { totalCount, doneCount, notDoneCount } = getAnalyedData();

    return (
        <div className="List">
            <h4>Todo List</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone : {notDoneCount}</div>
            </div>
            <input
                placeholder="검색어를 입력하세요"
                value={search}
                onChange={onChangeSearch}
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    // TodoItem에 todo에 담긴 모든 데이터를 보내준다.
                    // 리스트로 보낼 때는 키 값을 설정해야 한다.
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;

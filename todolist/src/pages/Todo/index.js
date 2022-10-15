// import styled from "styled-components";
import TodoForm from "./components/Form/Form";
import TodoList from "./components/List/List";
import TodoTitle from "./components/Title/Title";

function TodoPage() {
    return (
        <>
            {" "}
            {/*  단일 컴포넌트면 상관없지만 여러 컴포넌트를 사용하기 위해서는 
                <>프레그먼트 비어있는 태그로 감싸주거나 다른 태그로 감싸줘야 한다.*/}
            <TodoTitle />
            <TodoList />
            <TodoForm />
        </>
    );
}
export default TodoPage;

/*  css-in-js (styled-components 사용법)
    
    const 컴포넌트명 = styled(styled components 라이브러리를 import한 이름).요소(태그)`(백쿼트)
    */

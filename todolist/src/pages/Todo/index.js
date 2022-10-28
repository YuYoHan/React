// import styled from "styled-components";
import { useParams } from "react-router-dom";
import TodoForm from "./components/Form/Form";
import TodoList from "./components/List/List";
import TodoTitle from "./components/Title/Title";

function TodoPage() {
    // 밑의 콘솔에서는 Roting에서 :todoId에 해당하는 부분
    // http://localhost:3000/todo/1234123 이렇게 쳤다면
    // 1234123이 콘솔에 찍힌다.
    // {todoId: '1234123'}
    const params = useParams();
    // window.location.search는 현재 주소
    // URLSearchParams는 검색할 수 있는 URL화 시키는 것이다.
    console.log(params.id);
    const qurey = new URLSearchParams(window.location.search);
    console.log(qurey.get("good_loc"));

    /*  
        게시물 번호 혹은 상품번호 같은 고유번호는 param형태로 전달
        1. 정보 보안, 고유번호라는 것은 일방적으로 수정이 가능 따라서 사용자가 알 이유가 없는 데이터
        알아봤자 수정을 통해 데이터 변환 및 접근
    
    특히 검색이나 페이지네이션, 필터링 조건에 있어서는 쿼리를 반드시 사용해야 합니다.
        1. UI, UX
        사용자가 쉽게 자기가 원하는 필터를 선택 및 수정할 수 있고
        현재 자신이 보고 있는 정보를 URL로 확인할 수 있다라는 장점
        
        2. 뒤로가기

        qurey
        url의 부가정보 (? , &, =)
        ex)
        https/localhost:3000/todo?todo_id=64&user_id=32

        param
        url 값으로 전달 (/)
        ex)
        https/localhost:3000/todo/123

        * 백엔드 → 서버 → 주소가 있을 것
        ex) 프론트엔드 → 백엔드 데이터 요청

        axios.get("www.백엔드주소.com/todo/123")
        axios.get("www.백엔드주소.com/todo?todo_id=32")
        */

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

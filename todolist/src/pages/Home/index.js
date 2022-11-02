import { Link, useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate();
    /*
        * 클릭 키입력과 같은 이벤트 발생 시 함수명
        on기능명
        handle 기능명
        on 기능명handler
    */
    const onPageNavigate = (e) => {
        console.log(e.target);
        // navigate("/todo", {replace: true}) 이렇게 해주면
        // 지워져서 뒤로가기가 안된다.
        // 보통 이런 실정을 해주는 이유는 로그인 해놓고 시간이 지나면
        // 로그아웃 되는데 뒤로가기를 없에줘서 돌아가지 못하게 한다.
        // 보안때문에 사용한다.
        navigate("/todo");
    };

    return (
        <>
            <div onClick={onPageNavigate}>메인 페이지</div>
            <Link to="/todo/123">
                <button>투두 페이지로 이동</button>
            </Link>
            <a href="/todo/123">
                <button>투두로 이동</button>
            </a>
        </>

        /*
            react에서 페이지 링크를 이동시키기 위해서는 어떻게 해야할까?

            Link 태그를 사용해야 하는 경우
            리엑트는 SPA, CSR이기 때문에 사전에 데이터(html, css, js 리소스)를 모두 받아왔음
            그러나 a태그를 통해 이동하면 한번 더 데이터를 받아옴
            따라서 위에 주소를 바꿔주는 용도로만 사용하는 Link로 페이지를 이동하는게
            훨씬 최적화

            다시 받아와야 한다 : a 태그
            다시 받아올 필요가 없다 : Link 태그
        */
    );
}
export default HomePage;

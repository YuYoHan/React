import UseState from "./components/1_useState";
import UseState2 from "./components/1_useState2";
import UseRef from "./components/2_useRef";

function App() {
    /*  themeProvider → 특정 스타일을 전역 스코프에 지정헤주고
      모든 컴포넌트에서 import 없이 받아서 사용할 수 있도록 하는 것*/

    return (
        <>
            <UseState />
            <UseState2 />
            <UseRef />
        </>
    );
}

export default App;

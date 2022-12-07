import UseState from "./components/1_useState";
import UseState2 from "./components/1_useState2";
import UseRef from "./components/2_useRef";
import UseMemoCallback from "./components/3_useMemo_Callback";
import AddState from "./components/addState";
import Time from "./components/1_useState3";
import Effect from "./components/5_useEffect3";
import Ref from "./components/2_useRef3";
import Ref4 from "./components/2_useRef4";
import Ref5 from "./components/2_useRef5";
import Memo from "./components/3_useMemo";
import Memo2 from "./components/3_useMemo2";

function App() {
    /*  themeProvider → 특정 스타일을 전역 스코프에 지정헤주고
      모든 컴포넌트에서 import 없이 받아서 사용할 수 있도록 하는 것*/

    return (
        <>
            <UseState />
            <UseState2 />
            <UseRef />
            <AddState />
            <UseMemoCallback />
            <Time />
            <Effect />
            <Ref />
            <Ref4 />
            <br />
            <Ref5 />
            <br />
            <Memo />
            <Memo2 />
        </>
    );
}

export default App;

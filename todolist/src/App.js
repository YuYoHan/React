import { ThemeProvider } from "styled-components";
import Routing from "./routes/Roting";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

function App() {
    /*  themeProvider → 특정 스타일을 전역 스코프에 지정헤주고
      모든 컴포넌트에서 import 없이 받아서 사용할 수 있도록 하는 것*/

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles /> {/* reset-css 적용 */}
            <Routing />;
        </ThemeProvider>
    );
}

export default App;

/*
  module not found : 경로 확인, 해당 파일이 존재하는지(오타)
  is not defined : 99% 확률로 오타, 해당 변수 혹은 참조가 선언되어 있지 않다.
  
*/

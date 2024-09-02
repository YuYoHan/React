import Routing from "./routes/Routing";
import GlobalStyles from "./global";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
    /*  themeProvider → 특정 스타일을 전역 스코프에 지정헤주고
      모든 컴포넌트에서 import 없이 받아서 사용할 수 있도록 하는 것*/
    return (
        <ThemeProvider theme={theme}>
            <Routing />
        </ThemeProvider>
    );
}

export default App;

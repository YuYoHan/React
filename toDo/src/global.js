import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

/*
    reset css

    npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background-color: #e7e7e7;
    }
    button {
        border: none;
    }
`;
export default GlobalStyles;

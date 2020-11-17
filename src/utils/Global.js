import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

/* box-sizing:border-box sets it so that no matter what margin/padding is added the element can't be > 300px

GlobalStyle sets a universal CSS over default/dark/light/etc themes

*/
export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px; 
        box-sizing: border-box;
    }

    *, *:before, *:after { 
        box-sizing: inherit; 
    }

    body {
        margin: 0;
        font-family: ${primaryFont};
    }

    main {
        width: 90%;
        margin: 0 auto;
    }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
        flex-flow:row wrap;
    }
    html{
        font-size:10px;
    }
    
`
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        font-family: "Roboto";
        height: 100%;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
    }
    
    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

 

   
`;
export default GlobalStyle;

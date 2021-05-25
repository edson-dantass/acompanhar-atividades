import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        font-family: "Roboto" sans-serif;
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
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

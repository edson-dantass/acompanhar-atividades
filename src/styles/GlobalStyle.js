import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        /* width */
        ::-webkit-scrollbar {
            width: 5px;
            height: 6px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f11c; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            border-radius: 1em;
            background:#ffffff3b;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #ffffff66; 
        }
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

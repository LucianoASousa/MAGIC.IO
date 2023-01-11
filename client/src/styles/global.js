import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .react-overlay{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgb(0,0,0,0.5);
    }
    .react-modal{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 5px;
        max-width: 500px;
    }
    
`
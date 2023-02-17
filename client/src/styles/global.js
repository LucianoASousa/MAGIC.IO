import { createGlobalStyle } from "styled-components";
import planeswalker from '../assets/background.png';

export const GlobalStyle = createGlobalStyle`

body{
    background-color: #282c34;
    background-image: url(${planeswalker});
    background-size: 55rem;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    
}

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
        transform: translate(-50%, -75%);
        background-color: aliceblue;
        border-radius: 5px;
        width: 50%;
        height: 50%;
        max-width: 400px;
        max-height: 250px;
        
    }
    
`
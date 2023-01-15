import styled from 'styled-components'


export const Container = styled.form`
    background-color: aliceblue;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    
    h2{
        color:#4CAF50;
    }

    label { 
        display: block;
        margin: 4px 0;

    }

    
    button{
        
        background-color: #4CAF50;
        border: none;
        color: white;
        border-radius: 2px;
        
        margin-top: 5px;
        margin-left: 75%;
        width: 100px;
        
        padding: 5px;
        
        cursor: pointer;

        &:hover{    
            background-color: #45a049;
        };
    }


`


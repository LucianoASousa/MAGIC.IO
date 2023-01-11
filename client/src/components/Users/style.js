import styled from 'styled-components'
import { ImFilter } from 'react-icons/im';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

  .user1{
    align-self: start;
    background-color: #DAA520;
    border-radius: 5px;
    padding: 5px 20px;
    margin-right: 10px;
  }
  .user2{
    align-self: start;
    background-color: #c0c0c0;
    border-radius: 5px;
    padding: 5px 20px;
    margin-left: 10px;
  }

`

export const ButtonFilter = styled(ImFilter)`
    
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    
    &:hover{
        color: #4CAF50;
    }
`
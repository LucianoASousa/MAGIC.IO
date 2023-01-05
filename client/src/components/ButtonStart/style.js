import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;

    .card1{
        margin-top: 1rem;
        width: 15rem;
        height: 20rem;
        border-radius: 1rem;
        animation: hey 2s linear;
        
    }
    .card2{
        margin-top: 1rem;
        width: 15rem;
        height: 20rem;
        border-radius: 1rem;
        animation: hey 2s linear;
    }
    @keyframes hey {
        0%{
            opacity: 0;
            transform: translateY(100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
        
    }
        

    button{
    background:transparent;
    border:none;
    cursor:pointer;
    margin-top: 20rem;
    
        img{
            width: 5rem;
        }

        &:hover{
            animation: bounce 1s infinite;
        }
    }
    @keyframes bounce{
            0%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(-10px);
            }
            100%{
                transform: translateY(0);
            }
    }
    
    #loading{
        background:transparent;
        border:none;
        margin-top: 20rem;

        img{
            width: 5rem;
            animation: spin 2s linear infinite;
        }
    }

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
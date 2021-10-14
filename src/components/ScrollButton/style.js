import styled from 'styled-components';


  
export const Button = styled.div`
#scrollbutton, #scrollbutton-label{
    display: none;
}

@media(min-width: 767px){
    position: fixed; 
    border-radius: 8px;
    bottom: 40px;
    right: 20px;
    z-index: 1;
    cursor: pointer;
    color: green;

    #scrollbutton-container{
        display: flex !important;
        flex-direction: column !important;
        position: fixed;
    }
    
    #scollbutton{
        transition-timing-function: ease-in-out;
    }
    
    #scrollbutton-label{
        display: block;
        color: rgb(255,0, 0);
        font-weight: 600;
        margin: 0 auto;
    }
    
    #arrow-icon{
        transition: all 0.25s linear;
        margin: 10px;
        /* backdrop-filter: contrast(60%); */
        backdrop-filter: blur(3px);
        border-radius: 8px;
        background-color: rgba(21, 21, 22, 0.6);
    }
    
    #arrow-icon:hover{
        transform: scale(1.3);
    }
    
}
`
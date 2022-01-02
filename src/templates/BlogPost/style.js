import styled from "styled-components"; 

export const BlogContent = styled.div`
    margin: 120px auto;
    width: 95vw;

    p{
        margin: 20px auto;
        color: white;
        text-align: justify;
        /* list-style: auto !important; */
    }

    h1{
        /* margin: 220px; */
        color: red;
    }

    ol{
    }

    @media(min-width: 767px){
        margin: 240px auto;
       p{
           /* width: 740px; */
           /* margin: 50px auto !important; */
       }
        h1{
            width: 745px;
            margin: 80px auto;
        }
    }
`
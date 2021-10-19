import styled from "styled-components"; 


export const Wrapper = styled.div`
     >h1, >h2, >h3, >h4, >h5, >h6, >p {
        width: 95vw;
        margin: 20px auto;
        backdrop-filter: blur(3px);
    }

    #asset-image{
        width: 95vw;
        margin: 0 auto;
    }

    #blog-logo{
        width: 95vw;
        margin: 40px auto;
    }

    #blog-header{
        backdrop-filter: blur(3px);
        width: max-content;
        font-size: 40px;
        color: white !important;
        margin: 40px auto;
        font-weight: 600;
    }

    @media(min-width: 767px){

        /* width: 1000px; */
        #blog-header{
            margin: 40px auto 180px auto;
        }

    }
    
    @media(min-width: 1023px){
        #asset-image{
            width: 800px;
            margin: 0 auto !important;
        }

        p{
            width: 800px;
        }

    }

    @media(min-width: 1439px){
        #blog-header{
            margin: 180px auto 180px auto;
        }
    }
`
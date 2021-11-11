import styled from "styled-components"; 


export const Content = styled.div`
    width: 95vw;
    margin: 240px auto 20px auto;
    color: white;
    background-color: rgba(0, 0, 0, 0.459);
    border: 2px solid rgba(255, 255, 255, 0.137);
    
    #blog-header{
        /* backdrop-filter: blur(3px); */
        width: 96vw;
        font-size: 38px;
        /* color: red; */
        margin: 0 auto !important;
        font-weight: 600;
    }
    @media(min-width: 767px){
        width: 70vw;
        margin: 380px auto 20px auto;
        #blog-header{
            width: auto;
            text-align: center !important;
        }
    }

    @media(min-width: 1023px){
        max-width: 716px;
    }

    @media(min-width: 2559px){
        margin: 320px auto 20px auto;
    }
    `
export const Post = styled.div`
    padding: 0 10px;
    margin: 20px 0;
    text-align: left;
    box-shadow: 2px 2px 25px rgba(109, 108, 108, 0.438);
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.859);;
    a{
        font-weight: bold;
        font-size: 20px;
    }
    p#blog-title{
        text-align: center;
        color: red;
    }
    div#news-bottom-partition{
        width: 80vw;
        border: 1px solid rgba(255, 255, 255, 0.137);
        margin: 10px auto;
    }
    small{
        color: gray;
    }

    @media(min-width: 767px){
        div#news-bottom-partition{
            width: 500px;
        }
    }

    @media(min-width: 1023px){
        div#news-bottom-partition{
            width: 650px !important;
        }
    }
`
export const Pagination = styled.div`
    text-align: center;
    margin: 80px auto;
    a{
        padding: 15px !important;
        background-color: rgb(21, 21, 22);
        border-radius: 4px;
        &:hover,
	    &.current {
		background-color: gray !important;
		color: red !important;
	}

	&.prev:hover,
	&.next:hover {
		background-color: transparent;
        color: green;
    }
    }`
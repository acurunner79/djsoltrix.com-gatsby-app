import styled from "styled-components"; 


export const Content = styled.div`
    width: 95vw;
    margin: 120px auto;
    color: white;
    background-color: rgba(0, 0, 0, 0.459);
    border: 2px solid rgba(255, 255, 255, 0.137);
    
    @media(min-width: 767px){
        width: 70vw;
    }

    @media(min-width: 1023px){
        max-width: 716px;
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
    h1#blog-header{
        margin: 40px auto;
        color: red !important;
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
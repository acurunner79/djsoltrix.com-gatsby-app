import React, {useState, useEffect} from 'react';
import {BsChevronDoubleUp} from 'react-icons/bs';
// import { CgChevronDouble } from 'react-icons/cg'
import { Button } from './style';


  
const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300){
            setVisible(true)
        }    
        else if (scrolled <= 300){
            setVisible(false)
        }
    }
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }

    useEffect(() => {
            window.addEventListener('scroll', toggleVisible)
    }, [])
    
  
    return (
        <div id="scrollbutton-container">
            <Button id="scrollbutton">
            <h6 id="scrollbutton-label" style={{display: visible ? 'block' : 'none'}}>Top</h6>
            <BsChevronDoubleUp id="arrow-icon" size="50" color="red" onClick={scrollToTop} 
                style={{display: visible ? 'inline' : 'none'}} />
            </Button>
        </div>
    );
}
  
export default ScrollButton;
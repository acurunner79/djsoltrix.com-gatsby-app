import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import './layout.css'



const Layout = ({ children }) => {
    return (
        <div>
            <img id="mobile-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632262566/Soltrix_Logo_2018_White_zozzvb.png" alt="mobile-logo"/>
            <TopNav />
            <Hamburger />
        </div>
    )
}

export default Layout

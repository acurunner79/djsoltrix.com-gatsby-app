import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import PaginatedBlogPage from '../templates/PaginatedBlogPage'

const News = () => {

    return (
        <div>
            <TopNav />
            <Hamburger />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <h1>News</h1>
            {/* <PaginatedBlogPage></PaginatedBlogPage> */}
        </div>
    )
}

export default News

import React from 'react'
import Layout from "../Layout/index"
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import '../styles/contact.css'

const Contact = () => {
    return (
        // <Layout>
        <>
        <TopNav />
        <Hamburger />
        <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
        <div id="contact-main-container">
            <h1>Contact Page</h1>
            <form>
                <label className ="form-title">Name<br/>
                    <input className="form-input"
                        type="name"
                        name ="name"
                        placeholder=" (Required)">
                    </input>
                </label>
                    <br/>
                <label className ="form-title">Email<br/>
                    <input className="form-input"
                        type="email"
                        name="email"
                        placeholder=" (Required)">
                    </input>
                </label>
                    <br/>
                <label className ="form-title">Subject<br/>
                    <input className="form-input"
                        type="name"
                        name="subject"
                        placeholder=" (Required)">
                    </input>
                </label>
                    <br/>
                <label className ="form-title">Message<br/>
                    <textarea
                        id="message"
                        name="message"
                        placeholder=" Required">
                    </textarea>
                </label>
                    <br/>
                <button className="button">Submit</button><br/>
            </form>
        </div>
        </>
        // </Layout>
    )
}

export default Contact
import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout/index"
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import { ValidationError, useForm } from '@formspree/react'
import '../styles/contact.css'

const Contact = () => {

    const [state, handleSubmit] = useForm("mpzknrwl");
      if (state.succeeded) {
        return (
            <div className="message-submit">
               <h1>Thank you!</h1>
               <Link to="/">
                  <button className="button"><h3>Back to home page</h3></button>   
               </Link>
            </div>
         )
      }

    return (
        <>
        <TopNav />
        <Hamburger />
        <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
        <div id="contact-main-container">
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit} method="POST">
            <ValidationError field="email" prefix="Email" errors={state.errors} />
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
                <button className="button" type="submit" disabled={state.submitting}>Submit</button><br/>
            </form>
        </div>
        </>
    )
}

export default Contact
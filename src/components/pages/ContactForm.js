import React from 'react';
import { useForm } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mzbydgpb");
    if (state.succeeded) {
        return <h1>Thanks for Contacting</h1>;
    }
    return(
        <div>
             <form onSubmit={handleSubmit}>
                        <input type="text" id="name" name="firstname" placeholder="Your name" required></input>
                        <input type="email" id="email" name="email" placeholder="Email Address" required></input>
                        <input type="text" id="subject" name="Subject" placeholder="Subject" required></input>
                        <textarea id="message" name="message" placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit" disabled={state.submitting} id="not-dark" >Submit</button>
                    </form>
        </div>
    );
}

export default ContactForm;
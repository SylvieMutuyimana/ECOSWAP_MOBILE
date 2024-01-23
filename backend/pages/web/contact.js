import React, { useState } from "react";
import styles from '../../styles/website/contact.module.css';
import Link from "next/link";
const Contact = (orgDetails) => {
    console.log('orgDetails2:', orgDetails)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, message });
        setName(""); setEmail(""); setMessage("")
    };
    
    return (
    <div id={styles.contact}>
        <article>
            <form onSubmit={handleSubmit}>
                <div>
                    <p className={styles.span}>Name: </p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}required/>
                </div>
                <div>
                    <p className={styles.span}>Email: </p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className={styles.textarea}>
                    <p className={styles.span}>Message: </p>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required/>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </article>
        <aside>
            <p>
                Have questions or suggestions? 
            </p>
            <p>
                We{"'"}d love to hear from you! Feel free to reach out 
                to us at <Link href={orgDetails?.email||'#'}>{orgDetails?.email}</Link> or 
                follow us on social media for updates. 
            </p>
            <p>
                Your feedback is valuable to us as we work towards 
                creating a positive impact on e-waste management.
            </p>
            {
                orgDetails&&
                Object.keys(orgDetails?.social).map((social, index)=>(
                    <p key={index}>
                        {social} : 
                        <a href={orgDetails?.social[social]?.link}>{orgDetails?.social[social]?.username}</a>
                        <br/>
                    </p>
                ))
            }
        </aside>
    </div>
    );
};

export default Contact;

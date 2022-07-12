import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/contact.module.scss";
export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setMsg("");
        setName("");
        toast("Thank you for your message! We will reply you asap", {
            containerId: "C",
        });
    };

    return (
        <div className={styles.contactContainer}>
            <form
                className={styles.contactForm}
                onSubmit={(e) => {
                    onSubmit(e);
                }}
            >
                <label for="name">Name:</label>
                <input className={styles.inputField} id="name" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your name..." required="true"></input>
                <label for="email">Email:</label>
                <input className={styles.inputField} id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email..." required="true"></input>
                <label for="text">Message:</label>
                <textarea className={`${styles.inputField} ${styles.textarea}`} required="true" id="textarea" type="text" onChange={(e) => setMsg(e.target.value)} value={msg} placeholder="Enter your message..."></textarea>
                <button className={styles.btn} type="submit">
                    SEND
                </button>
            </form>
            <ToastContainer autoClose={2000} enableMultiContainer containerId={"C"} />
        </div>
    );
};

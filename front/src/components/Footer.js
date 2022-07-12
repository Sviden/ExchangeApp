import React from "react";
import styles from '../styles/footer.module.scss';
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


export const Footer =()=>(
    <footer>
        <div className={styles.container}>
           <ul>  <li><AiFillInstagram/> instanick</li>
            <li><BsLinkedin/> linkedIn</li>
            <li><BsFacebook/> facebook page</li>
            </ul>         
             ©️ 2022 Copyright: COMPNAME

        </div>
    </footer>
)
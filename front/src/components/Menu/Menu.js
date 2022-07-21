import React, {useState} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoPage } from "./noPage";
import styles from "../../styles/menu.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

export const Menu = () => {
    const [showElContact, setShowELContact] = useState(false);
    const [showElAbout, setShowELAbout] = useState(false);

    const navigate = useNavigate();

    const navigateToContact = () => {
        setShowELContact(!showElContact);
        setShowELAbout(false);
        !showElContact ? navigate("/contact", { replace: true }) : navigate("/", { replace: true });
    };

    const navigateToAbout = () => {
        setShowELAbout(!showElAbout);
        setShowELContact(false);
        !showElAbout ? navigate("/about", { replace: true }) : navigate("/", { replace: true });
    };

    return (
        <>
            <ul className={styles.menuList}>
                <li className={showElContact ? styles.menuListOnClick : styles.menuListLi} onClick={() => navigateToContact()}>
                    Contact {showElContact ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </li>
                <li className={showElAbout ? styles.menuListOnClick : styles.menuListLi} onClick={() => navigateToAbout()}>
                    About {showElAbout ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<NoPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

import { useState, useEffect } from "react";
import { Chart } from "./Chart";
import { Conversion } from "./Conversion";
import { GoldRates } from "./GoldSilverConversion";
import { Footer } from "../Footer";
import styles from "../../styles/conversion.module.scss";
import stylesGoldCurr from "../../styles/goldconversion.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const Main = () => {
    const [showConversion, setshowConversion] = useState(false);
    const [showGoldRates, setshowGoldRates] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const detectSize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        
        window.addEventListener("resize", detectSize);

        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowWidth]);


    if (windowWidth > 800) {
        return (
            <>
                <div className={styles.conversionContainer}>
                    <div onClick={() => setshowGoldRates(!showGoldRates)} className={showGoldRates ? styles.btnOnClick : styles.btn}>
                        Metal price {showGoldRates ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    <div onClick={() => setshowConversion(!showConversion)} className={showConversion ? styles.btnOnClick : styles.btn}>
                       Conversion {showConversion ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
                    </div>
                </div>
                <div className={showConversion || showGoldRates ? stylesGoldCurr.container : ""}>
                    {showConversion && <Conversion />}
                    {showGoldRates && <GoldRates />}{" "}
                </div>
                <Chart />
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <div className={styles.conversionContainer}>
                    <div onClick={() => setshowGoldRates(!showGoldRates)} className={showGoldRates ? styles.btnOnClick : styles.btn}>
                        Metal price {showGoldRates ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    <div className={showConversion || showGoldRates ? stylesGoldCurr.container : ""}>{showGoldRates && <GoldRates />} </div>
                    <div onClick={() => setshowConversion(!showConversion)} className={showConversion ? styles.btnOnClick : styles.btn}>
                       Conversion {showConversion ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
                    </div>
                </div>
                <div className={showConversion || showGoldRates ? stylesGoldCurr.container : ""}>{showConversion && <Conversion />}</div>
                <Chart />
                <Footer />
            </>
        );
    }
};

import { useState, useEffect } from "react";
import { Chart } from "./Chart";
import { Convertion } from "./Convertion";
import { GoldRates } from "./GoldSilverConvertion";
import { Footer } from "../Footer";
import styles from "../../styles/convertion.module.scss";
import stylesGoldCurr from "../../styles/goldconvertion.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const Main = () => {
    const [showConvertion, setshowConvertion] = useState(false);
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


    if (windowWidth > 600) {
        return (
            <>
                <div className={styles.convertionContainer}>
                    <div onClick={() => setshowGoldRates(!showGoldRates)} className={showGoldRates ? styles.btnOnClick : styles.btn}>
                        Gold&Silver price {showGoldRates ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    <div onClick={() => setshowConvertion(!showConvertion)} className={showConvertion ? styles.btnOnClick : styles.btn}>
                        Currency convertion {showConvertion ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
                    </div>
                </div>
                <div className={showConvertion || showGoldRates ? stylesGoldCurr.container : ""}>
                    {showConvertion && <Convertion />}
                    {showGoldRates && <GoldRates />}{" "}
                </div>
                <Chart />
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <div className={styles.convertionContainer}>
                    <div onClick={() => setshowGoldRates(!showGoldRates)} className={showGoldRates ? styles.btnOnClick : styles.btn}>
                        Gold&Silver price {showGoldRates ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    <div className={showConvertion || showGoldRates ? stylesGoldCurr.container : ""}>{showGoldRates && <GoldRates />} </div>
                    <div onClick={() => setshowConvertion(!showConvertion)} className={showConvertion ? styles.btnOnClick : styles.btn}>
                        Currency convertion {showConvertion ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
                    </div>
                </div>
                <div className={showConvertion || showGoldRates ? stylesGoldCurr.container : ""}>{showConvertion && <Convertion />}</div>
                <Chart />
                <Footer />
            </>
        );
    }
};

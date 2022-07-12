import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import styles from "../../styles/goldconvertion.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { theme } from "./themeForSelect";

const selectCurrOptions = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
];
const selectMetalOptions = [
    { value: "XAU", label: "XAU" },
    { value: "XAG", label: "XAG" },
];

export const GoldRates = () => {
    const [currency, setCurrency] = useState("");
    const [metal, setMetal] = useState("");
    const [price, setPrice] = useState("");
    const [showSelect, setShowSelect] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (currency && metal) {
            const data = await axios.get(`http://localhost:3001/goldsilverprice`, { params: { metal: metal.substring(0, 3), currency: currency } });
            setPrice(data.data);
            setShowSelect(!showSelect);
        } else {
            toast("Please, fill the form", {
                containerId: "B",
            });
        }
    };

    const ShowRate = () => {
        return (
            <div className={styles.goldResult}>
                <p>
                    {metal} price for gram 18k: {price.price18}
                    {currency}
                </p>
                <p>
                    {metal} price for gram 20k: {price.price20}
                    {currency}
                </p>
                <p>
                    {metal} price for gram 21k: {price.price21}
                    {currency}
                </p>
                <p>
                    {metal} price for gram 22k: {price.price22}
                    {currency}
                </p>
                <p>
                    {metal} price for gram 24k: {price.price24}
                    {currency}
                </p>
                <button onClick={() => setShowSelect(!showSelect)} className={styles.btn}>
                    Submit
                </button>
            </div>
        );
    };

    const onChangeCurr = (e) => {
        setCurrency(e.value);
    };
    const onChangeMetal = (e) => {
        setMetal(e.value);
    };

    return (
        <div className={styles.goldsilver}>
            <form onSubmit={(e) => submitHandler(e)} className={styles.formContainer}>
                <div style={showSelect ? { display: "block" } : { display: "none" }}>
                    <Select options={selectMetalOptions} onChange={onChangeMetal} placeholder="Select metal" className={styles.selectItem} theme={theme} classNamePrefix="select"></Select>
                    <Select options={selectCurrOptions} onChange={onChangeCurr} placeholder="Select currency" className={styles.selectItem} theme={theme}></Select>
                    <div className={styles.btnContainer}>
                        <button type="submit" className={styles.btn}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <div>{!showSelect && price && <ShowRate />}</div>
            <div>
                {" "}
                <ToastContainer enableMultiContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover containerId={"B"} />
            </div>
        </div>
    );
};

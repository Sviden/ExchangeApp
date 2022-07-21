import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import styles from "../../styles/goldconversion.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { theme } from "./themeForSelect";

export const Conversion = (props) => {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [amount, setAmount] = useState();
    const [exchResult, setExchREsult] = useState();
    const [symbols, setSymbols] = useState();

    const convert = async (e) => {
        const convPath = process.env.REACT_APP_CURRENCY_CONVERSION;
        console.log('JENYA:' + convPath);
        const response = await axios.get(convPath, { params: { from: from, to: to, amount: amount }});
        setExchREsult(response.data.result);
    };

    const getSymbols = async () => {
        const symbolsPath = process.env.REACT_APP_CURRENCY_SYMBOLS;
        const response = await axios.get(symbolsPath);
        setSymbols(response.data);
    };

    useEffect(() => {
        getSymbols();
    }, []);

    const onSelectFrom = (e) => {
        const fromCurrency = e.value.substring(0, 3);
        setFrom(fromCurrency);
        setExchREsult(0);
    };

    const onSelectTo = (e) => {
        const toCurrency = e.value.substring(0, 3);
        setTo(toCurrency);
        setExchREsult(0);
    };

    const Result = () => {
        return (
            <>
                {amount} {from} = {exchResult} {to}
            </>
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (from && to && amount) {
            convert();
        } else {
            toast("Please, fill the form", {
                containerId: "A",
            });
        }
    };

    return (
        <div className={styles.conversion}>
            <form onSubmit={(e) => onSubmit(e)}>
                <Select
                    theme={theme}
                    className={styles.selectItem}
                    options={symbols ? Object.keys(symbols).map((currKey, currIndex) => ({ label: `${currKey} : ${symbols[currKey]}`, value: `${currKey} : ${symbols[currKey]}` })) : ""}
                    onChange={onSelectFrom}
                    placeholder="From"
                ></Select>
                <Select
                    theme={theme}
                    className={styles.selectItem}
                    options={symbols ? Object.keys(symbols).map((currKey, currIndex) => ({ label: `${currKey} : ${symbols[currKey]}`, value: `${currKey} : ${symbols[currKey]}` })) : ""}
                    onChange={onSelectTo}
                    placeholder="To"
                ></Select>

                <div className={styles.amountInput}>
                    <label for="amount">Amount {from} </label>
                    <input id="amount" type="number" min={1} value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                </div>
                <div className={styles.btnContainer}>
                    {" "}
                    <button className={styles.btn} type="submit">
                        Convert
                    </button>
                </div>
            </form>
            <div className={exchResult ? styles.exchangeResult : ""}> {exchResult ? <Result /> : ""}</div>
            <div>
                <ToastContainer enableMultiContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover containerId={"A"} />
            </div>
        </div>
    );
};

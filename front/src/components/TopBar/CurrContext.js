import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const CurrContextTopBar = createContext("topbar curr context");
export const GoldSilverContextTopBar = createContext("topbar goldSilver context");

export const CurrencyContextTopBarProvider = ({ children, base }) => {
    const [curr, setCurr] = useState();

    const getDataCurrency = async () => {
        const currPath = process.env.REACT_APP_CURRENCIES_TOPBAR;
        const data = await axios.get(currPath, { params: { base: base } });
        if (!curr || data.data.usd !== curr.usd || data.data.eur !== curr.eur || data.data.btc !== curr.btc || data.data.date !== curr.date) {
            setCurr({ ...data.data });
        }
          
        return data.data;
    };

    useEffect(() => {
        getDataCurrency();

        let inter = setInterval(() => {
            getDataCurrency();
        }, 5000);

        return () => clearInterval(inter);
    }, [base]);

    return <CurrContextTopBar.Provider value={{ curr, base }}>{children}</CurrContextTopBar.Provider>;
};

export const GoldSilverTopBarProvider = ({ children, base }) => {
    const [silver, setSilver] = useState();
    const [gold, setGold] = useState();

    const getMetalData = async () => {
        const metalPath = process.env.REACT_APP_METAL_TOPBAR;
        const data = await axios.get(metalPath, { params: { base: base } });
        setGold(data.data.gold);
        setSilver(data.data.silver);
    };

    useEffect(() => {
        getMetalData();
        let inter = setInterval(() => {
            getMetalData();
        }, 5000);

        return () => clearInterval(inter);
    }, [base]);

    return <GoldSilverContextTopBar.Provider value={{ silver, gold }}>{children}</GoldSilverContextTopBar.Provider>;
};

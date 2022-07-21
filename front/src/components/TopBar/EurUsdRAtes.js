import React, { useContext, useEffect, useState, useRef } from "react";
import { CurrContextTopBar } from "./CurrContext";

export const EurUsd = () => {
    const { curr, base } = useContext(CurrContextTopBar);
    const [usd, setUsd] = useState();
    const [eur, setEur] = useState();
    const [difference, setDifference] = useState();

    const currValue = useRef();

    useEffect(() => {
        if (curr) {
            setEur(curr.eur);
            setUsd(curr.usd);
        }

        if (usd && base === "EUR") {
            currValue.current = usd;
            calcDifference(usd, currValue.current);
        } else if (eur && base === "USD") {
            currValue.current = eur;
            calcDifference(eur, currValue.current);
        }
    }, [curr]);

    const calcDifference = () => {
        let res;
        if (base === "EUR") {
            if (curr.usd >= currValue.current) {
                res = ((curr.usd - currValue.current) / curr.usd) * 100;
            } else if (currValue.current >= curr.usd) {
                res = ((currValue.current - curr.usd) / currValue.current) * 100;
            }
        }
        if (base === "USD") {
            if (curr.eur >= currValue.current) {
                res = ((curr.eur - currValue.current) / curr.eur) * 100;
            } else if (currValue.current >= curr.eur) {
                res = ((currValue.current - curr.eur) / currValue.current) * 100;
            }
        }

        res ? setDifference(res) : setDifference(0);
    };

    return (
        <>
            {curr ? (base === "EUR" ? `EUR/USD ${(curr.eur / curr.usd).toFixed(3)}` : `USD/EUR ${(curr.usd / curr.eur).toFixed(3)}`) : ""} <br></br>
            {difference ? difference.toFixed(3) : 0}%
        </>
    );
};

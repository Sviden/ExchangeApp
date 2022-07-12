import React, { useContext, useRef, useEffect, useState } from "react";
import { CurrContextTopBar } from "./CurrContext";

export const Btc = () => {
    const [diff, setDiff] = useState();
    const { curr } = useContext(CurrContextTopBar);
    const [btc, setBtc] = useState();

    const prevCurr = useRef();

    useEffect(() => {
        if (curr) {
            setBtc(curr.btc);
            prevCurr.current = btc;
            calcDiff();
        }
    }, [curr]);

    const calcDiff = () => {
        let res;
        if (btc >= prevCurr.current) {
            res = ((curr.btc - prevCurr.current) / curr.btc) * 100;
        } else if (prevCurr.current >= btc) {
            res = ((prevCurr.current - curr.btc) / prevCurr.current) * 100;
        }
        res ? setDiff(res) : setDiff(0);
    };

    return (
        <>
            BTC {curr?.btc ? curr.btc.toFixed(7) : ""}
            <br></br>
            {diff ? diff.toFixed(3) : 0}%
        </>
    );
};

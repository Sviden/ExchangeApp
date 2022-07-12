import React, { useContext, useState, useEffect, useRef } from "react";
import { GoldSilverContextTopBar } from "./CurrContext";

export const Silver = () => {
    const metal = useContext(GoldSilverContextTopBar);
    const [silver, setSilver] = useState();
    const [difference, setDifference] = useState();

    const prevValue = useRef();

    useEffect(() => {
        if (metal) {
            setSilver(metal.silver);
            prevValue.current = silver;
            calcDiff();
        }
    }, [metal]);

    const calcDiff = () => {
        let res;
        if (metal.silver >= prevValue.current) {
            res = ((metal.silver - prevValue.current) / metal.silver) * 100;
        } else if (prevValue.current >= metal.silver) {
            res = ((prevValue.current - metal.silver) / prevValue.current) * 100;
        }
        res ? setDifference(res) : setDifference(0);
    };

    return (
        <>
            SILVER {metal.silver ? metal.silver.toFixed(2) : ""}
            <br></br>
            {difference?.toFixed(3)}%
        </>
    );
};

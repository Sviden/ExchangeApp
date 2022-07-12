import React, { useContext, useState, useEffect, useRef } from "react";
import { GoldSilverContextTopBar } from "./CurrContext";

export const Gold = () => {
    const metal = useContext(GoldSilverContextTopBar);
    const [gold, setGold] = useState();
    const [difference, setDifference] = useState();

    const prevValue = useRef();

    useEffect(() => {
        if (metal) {
            setGold(metal.gold);
            prevValue.current = gold;
            calcDiff();
        }
    }, [metal]);

    const calcDiff = () => {
        let res;
        if (metal.gold >= prevValue.current) {
            res = ((metal.gold - prevValue.current) / metal.gold) * 100;
        } else if (prevValue.current >= metal.gold) {
            res = ((prevValue.current - metal.gold) / prevValue.current) * 100;
        }
        res ? setDifference(res) : setDifference(0);
    };

    return (
        <>
            GOLD {metal.gold ? metal.gold.toFixed(6) : ""}
            <br></br>
            {difference?.toFixed(3)}%
        </>
    );
};

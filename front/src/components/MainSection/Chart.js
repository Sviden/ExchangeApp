import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "../../styles/chart.module.scss";
import axios from "axios";

export const Chart = () => {
    const [dates, setDates] = useState();
    const [rates, setRates] = useState();

    const getData = async () => {
        const chartPath = process.env.REACT_APP_CHART_DATA;
        const result = await axios.get(chartPath);
        setDates(Object.keys(result.data.rates));
        setRates(result.data.rates);
    };
    

    useEffect(() => {
        getData();
    }, []);

    const dataArr = rates ? dates.map((d) => rates[d].XAU) : "";
    const labelArr = dates ? dates.map((d) => d) : "";
    const chartData = {
        labels: labelArr,
        datasets: [
            {
                label: "Gold to Silver Ratio",
                backgroundColor: "#ffe88a51",
                fill: true,
                pointRadius: 3,
                pointHoverRadius: 9,
                lineTension: 0.2,
                borderColor: "#157270",
                borderWidth: 1.3,
                data: dataArr,
            },
        ],
    };

    return (
        <div className={styles.chartContainer}>
            <p className={styles.header}>Gold to Silver ratio line chart information</p>
            <p className={styles.info}>
                The gold: silver ratio is the proportional relationship between the respective spot prices of gold and silver. Put simply this describes how many ounces of silver can be bought with one ounce of gold. Gold has always been
                more expensive than silver, however if the ratio were to fall below 1 this would no longer be the case. This is not a fixed ratio, and changes regularly depending on the current spot price of the metals.
            </p>
            {dates ? <Line style={{ width: 90 + "%", maxHeight: 65 + "%", height: 55 + "%" }} data={chartData} /> : ""}
        </div>
    );
};

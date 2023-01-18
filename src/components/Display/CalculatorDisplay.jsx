import React from "react";
import classes from "./CalculatorDisplay.module.css";
import ResetBtn from "../ResetBtn/ResetBtn";

const CalculatorDisplay = ({
    tipPerPerson,
    sumPerPerson,
    setTipValue,
    setPeopleAmount,
    setBillAmount
}) => {
    const isInfinite = (n) => n === n / 0;

    if (isNaN(tipPerPerson) || isInfinite(tipPerPerson)) {
        tipPerPerson = 0;
    }

    if (isNaN(sumPerPerson) || isInfinite(sumPerPerson)) {
        sumPerPerson = 0;
    }

    return (
        <div className={classes.display}>
            <div className={classes.item}>
                <div className={classes.itemInfo}>
                    <p className={classes.title}>Tip Amount</p>
                    <p className={classes.subtitle}>/ person</p>
                </div>
                <div className={classes.amount}>
                    <p className={classes.value}>${tipPerPerson.toFixed(2)}</p>
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.itemInfo}>
                    <p className={classes.title}>Total</p>
                    <p className={classes.subtitle}>/ person</p>
                </div>
                <div className={classes.amount}>
                    <p className={classes.value}>${sumPerPerson.toFixed(2)}</p>
                </div>
            </div>
            <ResetBtn
                setTipValue={setTipValue}
                setPeopleAmount={setPeopleAmount}
                setBillAmount={setBillAmount}
            />
        </div>
    );
};

export default CalculatorDisplay;

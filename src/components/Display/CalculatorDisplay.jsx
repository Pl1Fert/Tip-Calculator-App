import React from "react";
import classes from "./CalculatorDisplay.module.css";

const CalculatorDisplay = () => {
    return (
        <div className={classes.display}>
            <div className={classes.item}>
                <div className={classes.itemInfo}>
                    <p className={classes.title}>Tip Amount</p>
                    <p className={classes.subtitle}>/ person</p>
                </div>
                <div className={classes.amount}>
                    <p className={classes.value}>$0.00</p>
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.itemInfo}>
                    <p className={classes.title}>Total</p>
                    <p className={classes.subtitle}>/ person</p>
                </div>
                <div className={classes.amount}>
                    <p className={classes.value}>$0.00</p>
                </div>
            </div>
            <button className={classes.resetBtn}>RESET</button>
        </div>
    );
};

export default CalculatorDisplay;

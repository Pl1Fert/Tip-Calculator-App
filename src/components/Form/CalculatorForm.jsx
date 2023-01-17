import React, { useState } from "react";
import classes from "./CalculatorForm.module.css";
import MyInput from "../MyInput/MyInput";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
import useInput from "../../hooks/useInput";

const CalculatorForm = () => {
    const peopleAmount = useInput(0);
    const billAmount = useInput(0);

    return (
        <div className={classes.form}>
            <div className={classes.item}>
                <label htmlFor="bill">Bill</label>
                <MyInput
                    type="number"
                    {...billAmount}
                    id="bill"
                />
                <img
                    src={dollarIcon}
                    aria-hidden="true"
                    alt="dollar"
                    className={classes.icon}
                />
            </div>
            <div className={classes.item}>
                <label htmlFor="people">Number of People</label>
                <MyInput
                    type="number"
                    {...peopleAmount}
                    id="people"
                />
                <img
                    src={personIcon}
                    aria-hidden="true"
                    alt="person"
                    className={classes.icon}
                />
            </div>
        </div>
    );
};

export default CalculatorForm;

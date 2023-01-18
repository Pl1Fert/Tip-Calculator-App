import React from "react";
import classes from "./ResetBtn.module.css";

const ResetBtn = ({setTipValue, setPeopleAmount, setBillAmount}) => {
    const resetAll = () => {
        setTipValue(0);
        setPeopleAmount(0);
        setBillAmount(0);
    };
    
    return (
        <button
            className={classes.btn}
            name="resetBtn"
            type="reset"
            onClick={() => resetAll()}
        >
            RESET
        </button>
    );
};

export default ResetBtn;

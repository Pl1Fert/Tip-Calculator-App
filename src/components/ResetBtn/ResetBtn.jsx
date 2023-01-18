import React from "react";
import classes from "./ResetBtn.module.css";

const ResetBtn = ({
    setTipValue,
    setPeopleAmount,
    setBillAmount,
    setType,
    setInputTip,
}) => {
    const resetAll = () => {
        setTipValue(0);
        setPeopleAmount("");
        setBillAmount("");
        setType("");
        setInputTip("");
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

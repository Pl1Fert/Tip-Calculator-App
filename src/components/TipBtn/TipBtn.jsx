import React from "react";
import classes from './TipBtn.module.css';

const TipBtn = ({ value, setTipValue }) => {
    const onClick = () => {
        setTipValue(Number(value.replace("%", "")));
    };

    return (
        <button className={classes.btn} name="tipBtn" type="button" onClick={() => onClick()}>
            {value}
        </button>
    );
};

export default TipBtn;

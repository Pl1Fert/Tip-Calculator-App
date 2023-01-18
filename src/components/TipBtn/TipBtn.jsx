import React from "react";
import classes from "./TipBtn.module.css";

const TipBtn = ({ value, setTipValue, type, setType }) => {
    const btnClasses = [classes.btn];
    
    if (type === value) {
        btnClasses.push(classes.active);
    }

    const onClick = () => {
        setTipValue(Number(value.replace("%", "")));
        setType(value);
    };

    return (
        <button
            className={btnClasses.join(" ")}
            name="tipBtn"
            type="button"
            onClick={() => onClick()}
        >
            {value}
        </button>
    );
};

export default TipBtn;

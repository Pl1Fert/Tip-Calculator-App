import classes from "./CalculatorForm.module.css";
import MyInput from "../MyInput/MyInput";
import TipBtn from "../TipBtn/TipBtn";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
import { useState } from "react";

const CalculatorForm = ({
    billAmount,
    peopleAmount,
    setPeopleAmount,
    setBillAmount,
    setTipValue,
    type,
    setType,
    inputTip,
    setInputTip
}) => {

    return (
        <div className={classes.form}>
            <div className={classes.item}>
                <label htmlFor="bill" className={classes.title}>
                    Bill
                </label>
                <MyInput
                    type="text"
                    value={billAmount}
                    id={classes.bill}
                    placeholder="0"
                    pattern="^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$"
                    onChange={(e) => setBillAmount(e.target.value)}
                />
                <img
                    src={dollarIcon}
                    aria-hidden="true"
                    alt="dollar"
                    className={classes.icon}
                />
            </div>
            <div className={classes.buttons}>
                <label className={classes.title}>Select Tip %</label>
                <div className={classes.buttonsWrapper}>
                    <div className={classes.buttonsRow}>
                        <TipBtn
                            value={"5%"}
                            setTipValue={setTipValue}
                            type={type}
                            setType={setType}
                        />
                        <TipBtn
                            value={"10%"}
                            setTipValue={setTipValue}
                            type={type}
                            setType={setType}
                        />
                        <TipBtn
                            value={"15%"}
                            setTipValue={setTipValue}
                            type={type}
                            setType={setType}
                        />
                    </div>
                    <div className={classes.buttonsRow}>
                        <TipBtn
                            value={"25%"}
                            setTipValue={setTipValue}
                            type={type}
                            setType={setType}
                        />
                        <TipBtn
                            value={"50%"}
                            setTipValue={setTipValue}
                            type={type}
                            setType={setType}
                        />
                        <MyInput
                            type="text"
                            placeholder="Custom"
                            value={inputTip}
                            id={classes.tip}
                            pattern="^[1-9]{1}[0-9]*$"
                            onChange={(e) => {
                                setInputTip(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    if (e.target.value.length > 0) {
                                        setTipValue(inputTip);
                                        setType('');
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.item}>
                <label htmlFor="people" className={classes.title}>
                    Number of People
                </label>
                <MyInput
                    type="text"
                    value={peopleAmount}
                    id={classes.people}
                    placeholder="0"
                    pattern="^[1-9]{1}[0-9]*$"
                    onChange={(e) => setPeopleAmount(e.target.value)}
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

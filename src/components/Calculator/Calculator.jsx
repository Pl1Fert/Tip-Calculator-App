import classes from "./Calculator.module.css";
import CalculatorForm from "../Form/CalculatorForm";
import CalculatorDisplay from "../Display/CalculatorDisplay";
import { useState, useMemo } from "react";

const Calculator = () => {
    const [peopleAmount, setPeopleAmount] = useState("");
    const [billAmount, setBillAmount] = useState("");
    const [tipValue, setTipValue] = useState("");
    const [typeBtn, setTypeBtn] = useState("");
    const [inputTip, setInputTip] = useState("");

    const tipAmount = useMemo(() => {
        return billAmount * (tipValue / 100);
    }, [billAmount, tipValue]);

    const totalAmount = useMemo(() => {
        return Number(billAmount) + tipAmount;
    }, [billAmount, tipAmount]);

    const tipPerPerson = useMemo(() => {
        return tipAmount / peopleAmount;
    }, [totalAmount, peopleAmount]);

    const sumPerPerson = useMemo(() => {
        return totalAmount / peopleAmount;
    }, [totalAmount, peopleAmount]);

    return (
        <div className={classes.Calculator}>
            <CalculatorForm
                peopleAmount={peopleAmount}
                billAmount={billAmount}
                setPeopleAmount={setPeopleAmount}
                setBillAmount={setBillAmount}
                tipValue={tipValue}
                setTipValue={setTipValue}
                type={typeBtn}
                setType={setTypeBtn}
                inputTip={inputTip}
                setInputTip={setInputTip}
            />
            <CalculatorDisplay
                tipPerPerson={tipPerPerson}
                sumPerPerson={sumPerPerson}
                setTipValue={setTipValue}
                setPeopleAmount={setPeopleAmount}
                setBillAmount={setBillAmount}
                setType={setTypeBtn}
                setInputTip={setInputTip}
            />
        </div>
    );
};

export default Calculator;

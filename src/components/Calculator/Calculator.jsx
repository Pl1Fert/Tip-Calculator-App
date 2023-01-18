import classes from "./Calculator.module.css";
import CalculatorForm from "../Form/CalculatorForm";
import CalculatorDisplay from "../Display/CalculatorDisplay";
import { useState, useMemo } from "react";

const Calculator = () => {
    const [peopleAmount, setPeopleAmount] = useState(0);
    const [billAmount, setBillAmount] = useState(0);
    const [tipValue, setTipValue] = useState(0);

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
                setTipValue={setTipValue}
            />
            <CalculatorDisplay
                tipPerPerson={tipPerPerson}
                sumPerPerson={sumPerPerson}
                setTipValue={setTipValue}
                setPeopleAmount={setPeopleAmount}
                setBillAmount={setBillAmount}
            />
        </div>
    );
};

export default Calculator;

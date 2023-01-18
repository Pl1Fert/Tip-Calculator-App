import classes from "./CalculatorForm.module.css";
import MyInput from "../MyInput/MyInput";
import TipBtn from "../TipBtn/TipBtn";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";

const CalculatorForm = ({ billAmount, peopleAmount,setPeopleAmount, setBillAmount, setTipValue }) => {
    return (
        <div className={classes.form}>
            <div className={classes.item}>
                <label htmlFor="bill" className={classes.title}>
                    Bill
                </label>
                <MyInput
                    type="number"
                    value={billAmount}
                    id="bill"
                    placeholder="0"
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
                        <TipBtn value={"5%"} setTipValue={setTipValue} />
                        <TipBtn value={"10%"} setTipValue={setTipValue} />
                        <TipBtn value={"15%"} setTipValue={setTipValue} />
                    </div>
                    <div className={classes.buttonsRow}>
                        <TipBtn value={"25%"} setTipValue={setTipValue} />
                        <TipBtn value={"50%"} setTipValue={setTipValue} />
                        <input
                            className={classes.customInput}
                            type="number"
                            placeholder="Custom"
                            onChange={(e) => {
                                setTipValue(Number(e.target.value));
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
                    type="number"
                    value={peopleAmount}
                    id="people"
                    placeholder="0"
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

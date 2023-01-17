import React from 'react'
import classes from './Calculator.module.css';
import CalculatorForm from '../Form/CalculatorForm';
import CalculatorDisplay from '../Display/CalculatorDisplay';

const Calculator = () => {
  return (
    <div className={classes.Calculator}>
        <CalculatorForm/>
        <CalculatorDisplay/>
    </div>
  )
}

export default Calculator
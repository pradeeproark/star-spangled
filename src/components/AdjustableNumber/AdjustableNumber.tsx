import React from "react";
import * as Styles from "./AdjustableNumber.css";

export interface AdjustableNumberProps {
    displayNumber : number;
}

const AdjustableNumber = (props : AdjustableNumberProps) => {
    return <span className={Styles.AdjustableNumber}>
        {props.displayNumber}
    </span>;
};

export default AdjustableNumber;
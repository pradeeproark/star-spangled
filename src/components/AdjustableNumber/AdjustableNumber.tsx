import React from "react";

export interface AdjustableNumberProps {
    displayNumber : number;
}

const AdjustableNumber = (props : AdjustableNumberProps) => {
    return <span>{props.displayNumber}
    </span>;
};

export default AdjustableNumber;
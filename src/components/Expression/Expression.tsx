/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import {evaluate} from 'mathjs';
export interface ExpressionProps {
    expression: string;
    scope: Map<string, number>;
}

const Expression = (props: ExpressionProps) => {
    const [calculatedValue, setCalculatedValue] = useState("");
    useEffect(() => {
        try {
            setCalculatedValue(evaluate(props.expression, props.scope));
        } catch (error: unknown) {
            console.log(error);
            setCalculatedValue("error");
        }
    }, [props.expression, props.scope]);
    
    return <span>{props.expression} = {calculatedValue}</span>
}

export default Expression;
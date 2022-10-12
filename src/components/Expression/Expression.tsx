import React, { useContext, useEffect, useState } from "react";
import { evaluate } from "mathjs";
import { VarContext } from "../../interfaces/Common";

export interface ExpressionProps {
  expression: string;
}

enum ExpressionEvaluateState {
  UNEVALUATED,
  EVALUATED,
  FAILED,
}

const Expression = (props: ExpressionProps) => {
  const vars = useContext(VarContext);
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [evalState, setEvalState] = useState(
    ExpressionEvaluateState.UNEVALUATED
  );
  useEffect(() => {
    try {
      setCalculatedValue(ExpressionEvaluateState.UNEVALUATED);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const evaluatedValue = evaluate(props.expression, vars.vars) as number;
      setCalculatedValue(evaluatedValue);
      setEvalState(ExpressionEvaluateState.EVALUATED);
      // eslint-disable-next-line no-empty
    } catch (error: unknown) {
      setEvalState(ExpressionEvaluateState.FAILED);
    }
  }, [props.expression, vars]);

  const renderCalculatedValue = () => {
    switch (evalState) {
      case ExpressionEvaluateState.EVALUATED:
        return calculatedValue;
      case ExpressionEvaluateState.FAILED:
        return <mark>error</mark>;
      default:
        return props.expression;
    }
  };
  return (
    <span
      data-testid="expression"
      title={props.expression !== "" ? props.expression : "Missing Expression"}
    >
      {renderCalculatedValue()}
    </span>
  );
};

export default Expression;

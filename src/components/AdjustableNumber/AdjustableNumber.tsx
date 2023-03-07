import React, { useContext, useEffect, useState } from "react";
import * as Styles from "./AdjustableNumber.css";
import { VarContext } from "../../interfaces/Common";

export enum DISPLAYMODE {
  DISPLAY = "display",
  EDIT = "edit",
}
export interface AdjustableNumberProps {
  varName: string;
  displayNumber: number;
  displayMode: DISPLAYMODE;
}

const AdjustableNumber = (props: AdjustableNumberProps) => {
  const [displayMode, setDisplayMode] = useState(props.displayMode);
  const [displayNumber, setDisplayNumber] = useState(props.displayNumber);
  const { updateVars } = useContext(VarContext);
  useEffect(() => {
    setDisplayMode(props.displayMode);
  }, [props.displayMode]);

  useEffect(() => {
    if (updateVars) {
      updateVars(props.varName, displayNumber);
    }
  }, [displayNumber, props.displayNumber]);

  const toggleDisplayMode = () =>
    setDisplayMode(
      displayMode === DISPLAYMODE.DISPLAY
        ? DISPLAYMODE.EDIT
        : DISPLAYMODE.DISPLAY
    );

  const incrementHandler = () => {
    const newNumber = displayNumber + 1;
    setDisplayNumber(newNumber);
  };

  const decrementHandler = () => {
    const newNumber = displayNumber - 1;
    setDisplayNumber(newNumber);
  };

  return (
    <span tabIndex={0} onBlur={() => setDisplayMode(DISPLAYMODE.DISPLAY)}>
      {displayMode === DISPLAYMODE.EDIT && (
        <button onClick={decrementHandler}>&larr;</button>
      )}
      <span
        className={Styles.AdjustableNumber}
        onDoubleClick={toggleDisplayMode}
      >
        {displayNumber}
      </span>
      {displayMode === DISPLAYMODE.EDIT && (
        <button onClick={incrementHandler}>&rarr;</button>
      )}
    </span>
  );
};

AdjustableNumber.defaultProps = {
  displayNumber: 0,
  displayMode: DISPLAYMODE.DISPLAY,
};

export default AdjustableNumber;

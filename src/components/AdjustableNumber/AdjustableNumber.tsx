import React, { useEffect, useState } from "react";
import * as Styles from "./AdjustableNumber.css";

export enum DISPLAYMODE {
  DISPLAY = "display",
  EDIT = "edit",
}
export interface AdjustableNumberProps {
  displayNumber: number;
  displayMode: DISPLAYMODE;
}

const AdjustableNumber = (props: AdjustableNumberProps) => {
  const [displayMode, setDisplayMode] = useState(props.displayMode);
  const [displayNumber, setDisplayNumber] = useState(props.displayNumber);
  useEffect(() => {
    setDisplayMode(props.displayMode);
  }, [props.displayMode]);

  const toggleDisplayMode = () =>
    setDisplayMode(
      displayMode === DISPLAYMODE.DISPLAY
        ? DISPLAYMODE.EDIT
        : DISPLAYMODE.DISPLAY
    );

  return (
    <span tabIndex={0} onBlur={() => setDisplayMode(DISPLAYMODE.DISPLAY)}>
      {displayMode === DISPLAYMODE.EDIT && (
        <button onClick={() => setDisplayNumber(displayNumber - 1)}>
          &larr;
        </button>
      )}
      <span
        className={Styles.AdjustableNumber}
        onDoubleClick={toggleDisplayMode}
      >
        {displayNumber}
      </span>
      {displayMode === DISPLAYMODE.EDIT && (
        <button onClick={() => setDisplayNumber(displayNumber + 1)}>
          &rarr;
        </button>
      )}
    </span>
  );
};

AdjustableNumber.defaultProps = {
  displayNumber: 0,
  displayMode: DISPLAYMODE.DISPLAY,
};

export default AdjustableNumber;

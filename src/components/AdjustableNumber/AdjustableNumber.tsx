import React, {useEffect, useState} from "react";
import * as Styles from "./AdjustableNumber.css";
import {newCustomEventEmitter} from 'react-custom-events'

export enum DISPLAYMODE {
  DISPLAY = "display",
  EDIT = "edit"
}
export interface AdjustableNumberProps {
  varName: string;
  displayNumber : number;
  displayMode : DISPLAYMODE;
}

const AdjustableNumber = (props : AdjustableNumberProps) => {
  const [displayMode,
    setDisplayMode] = useState(props.displayMode);
  const [displayNumber,
    setDisplayNumber] = useState(props.displayNumber);
  useEffect(() => {
    setDisplayMode(props.displayMode);
  }, [props.displayMode]);

  const toggleDisplayMode = () => setDisplayMode(displayMode === DISPLAYMODE.DISPLAY
    ? DISPLAYMODE.EDIT
    : DISPLAYMODE.DISPLAY);

  const emitter = newCustomEventEmitter();

  const incrementHandler = () => {
    const newNumber = displayNumber + 1;
    setDisplayNumber(newNumber);
    emitter.emit('varChanged', {
      varName: props.varName,
      newValue: newNumber
    });
  };

  const decrementHandler = () => {
    const newNumber = displayNumber - 1;
    setDisplayNumber(newNumber);
    emitter.emit('varChanged', {
      varName: props.varName,
      newValue: newNumber
    });
  };

  return (
    <span tabIndex={0} onBlur={() => setDisplayMode(DISPLAYMODE.DISPLAY)}>
      {displayMode === DISPLAYMODE.EDIT && (
        <button onClick={decrementHandler} ref={emitter}>
          &larr;
        </button>
      )}
      <span className={Styles.AdjustableNumber} onDoubleClick={toggleDisplayMode}>
        {displayNumber}
      </span>
      {displayMode === DISPLAYMODE.EDIT && (
        <button onClick={incrementHandler} ref={emitter}>
          &rarr;
        </button>
      )}
    </span>
  );
};

AdjustableNumber.defaultProps = {
  displayNumber: 0,
  displayMode: DISPLAYMODE.DISPLAY
};

export default AdjustableNumber;

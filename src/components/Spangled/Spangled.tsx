import React, { ReactNode, useState } from "react";
import { VarContext } from "../../interfaces/Common";

export interface SpangledProps {
  children: ReactNode;
}

const Spangled = (props: SpangledProps) => {
  const [vars, setVars] = useState(new Map());
  const updateVars = (k: string, v: number) => {
    setVars(new Map(vars.set(k, v)));
  };

  return (
    <VarContext.Provider value={{ vars, updateVars }}>
      <span data-testid="spangled">{props.children}</span>
    </VarContext.Provider>
  );
};

export default Spangled;

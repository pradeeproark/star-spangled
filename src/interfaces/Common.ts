import React from "react";

interface IVarContext {
    vars: Map<string, number>;
    updateVars: ((k: string, v: number) => void) | undefined;
}

export const VarContext = React.createContext<IVarContext>({ vars: new Map(), updateVars: undefined });
import React, {ReactNode} from "react";
import {useCustomEventListener} from 'react-custom-events';

export interface SpangledProps {
    children : ReactNode;
}

const Spangled = (props: SpangledProps) => {
    const listener = useCustomEventListener('varChanged', (data) => {
        console.log(data);
    });
    return (
    <span ref={listener}>
    {props.children}
     </span>)
}

export default Spangled;
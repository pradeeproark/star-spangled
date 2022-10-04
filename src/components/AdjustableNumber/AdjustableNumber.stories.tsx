import {Story} from '@storybook/react';
import React from 'react';
import AdjustableNumber, {AdjustableNumberProps} from './AdjustableNumber';

export default {
    title : 'AdjustableNumber',
    component : AdjustableNumber,
    argTypes : {
        displayNumber: {
            control: {
                type: 'number'
            }
        }
    }
};

const Template : Story < AdjustableNumberProps > = (args : JSX.IntrinsicAttributes & AdjustableNumberProps) => <p>when you eat&nbsp;
    <AdjustableNumber {...args}/>
    cookies, you consume&nbsp;
    <AdjustableNumber displayNumber={1}/>&nbsp; calories. That's&nbsp;
    <AdjustableNumber displayNumber={2}/>&nbsp; of your recommended daily calories</p>

export const DefaultAdjustableNumber = Template.bind({});

DefaultAdjustableNumber.args = {
    displayNumber: 0
}
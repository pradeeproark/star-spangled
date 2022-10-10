import {Story} from '@storybook/react';
import React from 'react';
import AdjustableNumber from '../AdjustableNumber';
import Spangled, { SpangledProps } from './Spangled';

export default {
    title : 'Spangled',
    component : Spangled
};

const Template : Story < SpangledProps > = () => <Spangled>
    <p>when you eat&nbsp;
    <AdjustableNumber varName='cookies' displayNumber={3}/>&nbsp;
    cookies, you consume&nbsp;
    <AdjustableNumber varName='calories' displayNumber={300}/>&nbsp;
    calories. That's&nbsp;
    <AdjustableNumber varName='recommended' displayNumber={2000}/>&nbsp;
    of your recommended daily calories</p>
</Spangled>

export const DefaultSpangled = Template.bind({});

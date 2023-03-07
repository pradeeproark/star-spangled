import {Story} from '@storybook/react';
import React from 'react';
import Expression, { ExpressionProps } from './Expression';


export default {
    title : 'Expression',
    component : Expression,
    argTypes : {
        expression: {
            control: {
                type: 'text'
            },
            defaultValue: '2+2'
        }
    }
};

const Template : Story < ExpressionProps > = (args) => <Expression {...args}></Expression>

export const DefaultExpression = Template.bind({});

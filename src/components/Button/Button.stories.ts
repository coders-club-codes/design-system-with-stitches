import { Story } from '@storybook/react';

import { Button, ButtonProps } from '.';

type ButtonStory = Story<ButtonProps>;

export default { component: Button, title: 'Button' };

export const Primary: ButtonStory = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary: ButtonStory = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Pill: ButtonStory = {
  args: {
    children: 'Pill Button',
    variant: 'secondary',
    pill: true,
  },
};

export const WithTheme: ButtonStory = {
  args: {
    children: 'With Theme Button',
    pill: true,
    withTheme: true,
  },
};

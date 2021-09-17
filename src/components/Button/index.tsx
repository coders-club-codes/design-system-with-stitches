import { ComponentProps } from 'react';

import { lightTheme } from '../../styles';
import * as S from './styles';

export type ButtonProps = ComponentProps<typeof S['Container']> & {
  withTheme?: boolean;
};

export const Button = ({ children, withTheme, ...props }: ButtonProps) => (
  <div className={withTheme ? lightTheme : undefined}>
    <S.Container {...props}>{children}</S.Container>
  </div>
);

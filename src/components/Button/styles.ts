import { codersStyled } from '../../styles';

export const Container = codersStyled('button', {
  appearance: 'none',
  border: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  px: '$32',
  py: '$16',

  variants: {
    variant: {
      primary: {
        // mesmo código no styled-components
        // background: ${({ theme }) => theme.colors.button.primary.bg}
        background: '$button-primary-bg',
        color: '$button-primary-text',
      },
      secondary: {
        background: '$button-secondary-bg',
        color: '$button-secondary-text',
        border: '1px solid',
        borderColor: '$coders-red',
      },
    },
    pill: {
      true: {
        borderRadius: '$pill',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

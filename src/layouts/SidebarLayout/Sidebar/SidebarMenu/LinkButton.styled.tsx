import {
  Button,
  ButtonTypeMap,
  ExtendButtonBase,
  alpha,
  styled
} from '@mui/material';

const LinkButton = styled(Button)<
  ExtendButtonBase<ButtonTypeMap<{}, 'button'>>
>(
  ({ theme }) => `
        display: flex;
        color: ${theme.colors.alpha.trueWhite[70]};
        background-color: transparent;
        width: 100%;
        justify-content: flex-start;
        padding: ${theme.spacing(1.2, 3)};

        .MuiButton-startIcon,
        .MuiButton-endIcon {
        transition: ${theme.transitions.create(['color'])};

        .MuiSvgIcon-root {
            font-size: inherit;
            transition: none;
        }
        }

        .MuiButton-startIcon {
        color: ${theme.colors.alpha.trueWhite[30]};
        font-size: ${theme.typography.pxToRem(20)};
        margin-right: ${theme.spacing(1)};
        }
        
        .MuiButton-endIcon {
        color: ${theme.colors.alpha.trueWhite[50]};
        margin-left: auto;
        opacity: .8;
        font-size: ${theme.typography.pxToRem(20)};
        }

        &.active,
        &:hover {
        background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
        color: ${theme.colors.alpha.trueWhite[100]};

        .MuiButton-startIcon,
        .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[100]};
        }
         
`
);
export default LinkButton;

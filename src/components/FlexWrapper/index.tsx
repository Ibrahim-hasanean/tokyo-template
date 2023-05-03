import { Box, styled } from '@mui/material';
import React, { CSSProperties } from 'react';

interface IFlexWrapper extends React.HTMLAttributes<HTMLDivElement> {
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
}

const FlexWrapper = styled(Box)<IFlexWrapper>(
  ({
    theme,
    alignItems = 'center',
    flexDirection = 'row',
    justifyContent = 'flex-end'
  }) => ({
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems
  })
);

export default FlexWrapper;

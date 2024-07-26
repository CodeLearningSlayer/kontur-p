/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import ButtonRound from '../ButtonRound';
import getStyleBySide, { CaptionSide } from '../../utils/getStyleBySide';

const ButtonWrapper = styled.div<{ $side: CaptionSide; $gap?: number }>`
  display: flex;
  ${({ $gap }) => `gap: ${$gap ?? 8}px`};
  ${(props) => `flex-direction: ${getStyleBySide(props.$side)}`};
  justify-content: center;
  align-items: center;
`;

const ButtonWithCaption = ({
  caption,
  side,
  gap,
  className,
}: {
  caption: string;
  side: CaptionSide;
  gap?: number;
  className?: string;
}) => {
  return (
    <ButtonWrapper $side={side} $gap={gap} className={className}>
      <div className="caption">{caption}</div>
      <ButtonRound type="hold" />
    </ButtonWrapper>
  );
};

export default ButtonWithCaption;

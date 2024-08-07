/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import styled from 'styled-components';
import getStyleBySide, { CaptionSide } from '../../utils/getStyleBySide';
import LampDefault from '../LampDefault';
import LampActive from '../LampActive';
import { observer } from 'mobx-react';

const LampWrapper = styled.div<{ $side: CaptionSide; $gap?: number }>`
  display: flex;
  ${(props) => `gap: ${props.$gap ?? 10}px`};
  ${(props) => `flex-direction: ${getStyleBySide(props.$side)}`};
  justify-content: center;
  align-items: center;
`;

const LampWithCaptionElement = ({
  caption,
  side,
  className,
  gap,
  isActive,
  needToBlink
}: {
  caption?: string;
  isActive?: boolean;
  needToBlink?: boolean;
  side?: CaptionSide;
  className?: string;
  gap?: number;
}) => {
  const [active, setActive] = useState(isActive)
  if (needToBlink && isActive) {
    setInterval(() => {
      setActive(!active)
    }, 2000)
  }
  return (
    <LampWrapper
      $side={side ?? 'top'}
      className={className}
      $gap={caption ? gap : 0}
    >
      <div className="caption" style={{ fontSize: 14 }}>
        {caption ?? ''}
      </div>
      {needToBlink ? (active ? <LampActive /> : <LampDefault />) : (isActive ? <LampActive /> : <LampDefault />)}
    </LampWrapper>
  );
};

const LampWithCaption = observer(LampWithCaptionElement)
export default LampWithCaption;

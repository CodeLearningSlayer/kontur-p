/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import styled from 'styled-components';
import getStyleBySide, { CaptionSide } from '../../utils/getStyleBySide';
import LampDefault from '../LampDefault';
import LampActive from '../LampActive';

const LampWrapper = styled.div<{ $side: CaptionSide; $gap?: number }>`
  display: flex;
  ${(props) => `gap: ${props.$gap ?? 10}px`};
  ${(props) => `flex-direction: ${getStyleBySide(props.$side)}`};
  justify-content: center;
  align-items: center;
`;

const LampWithCaption = ({
  caption,
  side,
  className,
  gap,
}: {
  caption: string;
  side: CaptionSide;
  className?: string;
  gap?: number;
}) => {
  const [lampState, setLampState] = useState<'active' | 'default'>('default');

  return (
    <LampWrapper $side={side} className={className} $gap={gap}>
      <div className="caption" style={{ fontSize: 14 }}>
        {caption}
      </div>
      {lampState === 'default' ? <LampDefault /> : <LampActive />}
    </LampWrapper>
  );
};

export default LampWithCaption;

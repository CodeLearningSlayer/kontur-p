import React, { useState } from 'react';
import styled from 'styled-components';
import getStyleBySide, { CaptionSide } from '../../utils/getStyleBySide';
import LampDefault from '../LampDefault';
import LampActive from '../LampActive';

const LampWrapper = styled.div<{ $side: CaptionSide }>`
  display: flex;
  gap: 10px;
  ${(props) => `flex-direction: ${getStyleBySide(props.$side)}`};
  justify-content: center;
  align-items: center;
`;

const LampWithCaption = ({
  caption,
  side,
  className,
}: {
  caption: string;
  side: CaptionSide;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}) => {
  const [lampState, setLampState] = useState<'active' | 'default'>('default');

  return (
    <LampWrapper $side={side} className={className}>
      <div className="caption">{caption}</div>
      {lampState === 'default' ? <LampDefault /> : <LampActive />}
    </LampWrapper>
  );
};

export default LampWithCaption;

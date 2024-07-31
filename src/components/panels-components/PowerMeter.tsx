import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import activeScreen from '../../../assets/images/components/screen-active.png';
import defaultScreen from '../../../assets/images/components/screen-default.png';
import intermediateScreen from '../../../assets/images/components/screen-intermediate.png';
import Screw from '../Screw';
import getScrewPositionBySide from '../../utils/getScrewPositionBySide';

const PowerMeterWrapper = styled.div`
  position: relative;
  box-shadow: 2px 2px 9px 3px #6e6e6e;
  background: linear-gradient(to right, #8a8a8a, #bdbdbd);
  padding: 10px;
  filter: drop-shadow(5px 5px 5px);
  border-radius: 10px;
`;
const PowerMeterInner = styled.div`
  border-radius: 8px;
  margin: 10px;
  background: #e9e9e9;
`;
const PowerMeterImg = styled.img`
  width: 150px;
  box-shadow: inset 3px 3px 5px 3px #6e6e6e;
  border-radius: 8px;
`;
const PowerMeterScrew = styled(Screw)<{
  $side: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}>`
  position: absolute;
  ${(props) => `${getScrewPositionBySide(props.$side)}`};
  width: 30px;
`;

const PowerMeter = ({ className }: { className?: string }) => {
  const [screenState, setScreenState] = useState<
    'idle' | 'active' | 'intermediate'
  >('idle');

  const currentScreen = useMemo(() => {
    switch (screenState) {
      case 'idle':
        return defaultScreen;
      case 'active':
        return activeScreen;
      case 'intermediate':
        return intermediateScreen;
      default:
        return defaultScreen;
    }
  }, [screenState]);

  return (
    <PowerMeterWrapper className={className}>
      <PowerMeterScrew $side="top-left" />
      <PowerMeterScrew $side="top-right" />
      <PowerMeterScrew $side="bottom-left" />
      <PowerMeterScrew $side="bottom-right" />
      <PowerMeterInner>
        <PowerMeterImg src={currentScreen} />
      </PowerMeterInner>
    </PowerMeterWrapper>
  );
};

export default PowerMeter;

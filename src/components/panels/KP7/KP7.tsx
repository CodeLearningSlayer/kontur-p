import React, { useState } from 'react';
import styled from 'styled-components';
import PanelLayout from '../../../layouts/PanelLayout';
import TopScrew from '../../panels-components/TopScrew';
import Adjustor from '../../panels-components/Adjustor';
import LampWithCaption from '../../panels-components/LampWithCaption';
import Tumbler from '../../Tumbler';
import PowerMeter from '../../panels-components/PowerMeter';
import CirclePowerSelect from '../../panels-components/CirclePowerSelect';
import BottomScrew from '../../panels-components/BottomScrew';
import { KonturViewModel, KP7Props } from '../../kontur/KonturViewModel';
import { observer } from 'mobx-react';
import { KP7ViewModel } from './KP7ViewModel';

const AdjustorBlock = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  width: 100%;
`;

const VerticalLinesBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 93px;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 12px;
  background: black;
  position: relative;
  top: 4px;
  margin-bottom: 7px;
`;

const LampBlock = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 30px;
`;

const StyledTumbler = styled(Tumbler)`
  margin-bottom: 30px;
`;

const StyledPowerMeter = styled(PowerMeter)`
  margin-bottom: 20px;
`;

const KP7Element = (props: KP7Props) => {
  const { isActive, onChangeActive, onChangePowerCircleSelectPosition, powerCircleSelectPosition } = props;
  return (
    <PanelLayout>
      <TopScrew name="КП7" />
      <AdjustorBlock>
        <Adjustor caption="ПР1-3А" />
        <Adjustor caption="ПР2-3А" />
      </AdjustorBlock>
      <VerticalLinesBlock>
        <VerticalLine />
        <VerticalLine />
      </VerticalLinesBlock>
      <LampBlock>
        <LampWithCaption />
        <LampWithCaption isActive={isActive}/>
        <LampWithCaption />
      </LampBlock>
      <StyledTumbler caption="ОТКЛ" topCaption="СЕТЬ" direction="vertical" onChange={onChangeActive} />
      <StyledPowerMeter position={powerCircleSelectPosition} />
      <CirclePowerSelect position={powerCircleSelectPosition} onChange={onChangePowerCircleSelectPosition}/>
      <BottomScrew />
    </PanelLayout>
  );
};

const KP7 = observer(KP7Element)
export default KP7;

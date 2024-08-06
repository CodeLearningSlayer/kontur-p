import React from 'react';
import styled from 'styled-components';
import PanelLayout from '../../layouts/PanelLayout';
import TopScrew from '../panels-components/TopScrew';
import Adjustor from '../panels-components/Adjustor';
import LampWithCaption from '../panels-components/LampWithCaption';
import Tumbler from '../Tumbler';
import PowerMeter from '../panels-components/PowerMeter';
import CirclePowerSelect from '../panels-components/CirclePowerSelect';
import BottomScrew from '../panels-components/BottomScrew';

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

const KP7 = () => {
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
        <LampWithCaption />
        <LampWithCaption />
      </LampBlock>
      <StyledTumbler caption="ОТКЛ" topCaption="СЕТЬ" direction="vertical" />
      <StyledPowerMeter position={0} />
      <CirclePowerSelect />
      <BottomScrew />
    </PanelLayout>
  );
};

export default KP7;

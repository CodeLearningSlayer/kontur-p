import React from 'react';
import styled from 'styled-components';
import PanelLayout from '../../layouts/PanelLayout';
import Screw from '../Screw';
import Tumbler from '../Tumbler';
import ButtonWithCaption from '../panels-components/ButtonWithCaption';
import DigitalScreen from '../panels-components/DigitalScreen';
import TopScrew from '../panels-components/TopScrew';
import StyledLamp from '../panels-components/StyledLamp';
import ChannelsWrapper from '../panels-components/ChannelsWrapper';
import LampWithCaption from '../panels-components/LampWithCaption';

const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const KP3 = () => {
  return (
    <PanelLayout>
      <TopScrew name="КП2" />
      <StyledLamp caption="ПРИЕМ" side="top" />
      <ChannelsWrapper>
        <div style={{ marginBottom: 10, marginLeft: 30 }}>КАНАЛ</div>
        <LampWithCaption caption="10" side="left" />
        <LampWithCaption caption="11" side="left" />
        <LampWithCaption caption="12" side="left" />
      </ChannelsWrapper>
      <div>
        <div style={{ marginBottom: 8, textAlign: 'center' }}>КОНТРОЛЬ</div>
        <ButtonsBlock>
          <ButtonWithCaption caption="КАНАЛ 10" side="bottom" gap={0} />
          <ButtonWithCaption caption="КАНАЛ 11" side="bottom" gap={0} />
          <ButtonWithCaption caption="КАНАЛ 12" side="bottom" gap={0} />
        </ButtonsBlock>
      </div>
      <Screw />
    </PanelLayout>
  );
};

export default KP3;

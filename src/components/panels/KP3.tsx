import React from 'react';
import styled from 'styled-components';
import PanelLayout from '../../layouts/PanelLayout';
import ButtonWithCaption from '../panels-components/ButtonWithCaption';
import TopScrew from '../panels-components/TopScrew';
import StyledLamp from '../panels-components/StyledLamp';
import ChannelsWrapper from '../panels-components/ChannelsWrapper';
import LampWithCaption from '../panels-components/LampWithCaption';
import BottomScrew from '../panels-components/BottomScrew';

const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const KP3 = () => {
  return (
    <PanelLayout>
      <TopScrew name="КП3" />
      <StyledLamp caption="СБОЙ" side="top" />
      <ChannelsWrapper>
        <div style={{ marginBottom: 10, marginLeft: 30 }}>КАНАЛ</div>
        <LampWithCaption caption="10" side="left" />
        <LampWithCaption caption="11" side="left" />
        <LampWithCaption caption="12" side="left" />
      </ChannelsWrapper>
      <div>
        <div style={{ marginBottom: 8, textAlign: 'center' }}>КОНТРОЛЬ</div>
        <ButtonsBlock>
          <ButtonWithCaption caption="КАНАЛ 10" side="bottom" gap={3} />
          <ButtonWithCaption caption="КАНАЛ 11" side="bottom" gap={3} />
          <ButtonWithCaption caption="КАНАЛ 12" side="bottom" gap={3} />
        </ButtonsBlock>
      </div>
      <BottomScrew />
    </PanelLayout>
  );
};

export default KP3;

import React from 'react';
import styled from 'styled-components';
import TopScrew from '../panels-components/TopScrew';
import LampWithCaption from '../panels-components/LampWithCaption';
import ButtonWithCaption from '../panels-components/ButtonWithCaption';
import PanelLayout from '../../layouts/PanelLayout';
import Screw from '../Screw';

const ChannelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: -30px;
  margin-bottom: 220px;
`;

const StyledLamp = styled(LampWithCaption)`
  margin-bottom: 50px;
`;

const StyledScrew = styled(Screw)`
  margin-top: auto;
  width: 45px;
  height: 45px;
`;

// подумать на маржином вниз
const KP1 = () => {
  return (
    <PanelLayout>
      <TopScrew name="КП1" />
      <StyledLamp caption="КОНТРОЛЬ ПОДПИСИ" side="top" />
      <ChannelsWrapper>
        <div style={{ marginBottom: 10, marginLeft: 30 }}>КАНАЛ</div>
        <LampWithCaption caption="10" side="left" />
        <LampWithCaption caption="11" side="left" />
      </ChannelsWrapper>
      <ButtonWithCaption caption="КОНТРОЛЬ" side="top" />
      <StyledScrew />
    </PanelLayout>
  );
};

export default KP1;

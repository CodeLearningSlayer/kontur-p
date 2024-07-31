import React from 'react';
import styled from 'styled-components';
import PanelLayout from '../../layouts/PanelLayout';
import TopScrew from '../panels-components/TopScrew';
import CircleSelect from '../panels-components/CircleSelect';
import LampWithCaption from '../panels-components/LampWithCaption';
import ButtonWithCaption from '../panels-components/ButtonWithCaption';
import BottomScrew from '../panels-components/BottomScrew';

const ChannelsWrapper = styled.div`
  border: 1px solid black;
  text-align: center;
  margin-top: 30px;
  padding: 20px 10px;
  position: relative;
  margin-bottom: 62px;
`;

const ChannelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
`;

const KP4 = () => {
  return (
    <PanelLayout>
      <TopScrew name="КП4" />
      <ChannelsWrapper>
        <div
          style={{
            marginBottom: 10,
            position: 'absolute',
            top: '-10px',
            left: '40px',
            background: '#e9e9e9',
            padding: '2px 5px',
          }}
        >
          КАНАЛ
        </div>
        <ChannelsGrid>
          <LampWithCaption caption="1" side="top" gap={4} />
          <LampWithCaption caption="2" side="top" gap={4} />
          <LampWithCaption caption="3" side="top" gap={4} />
          <LampWithCaption caption="4" side="top" gap={4} />
          <LampWithCaption caption="5" side="top" gap={4} />
          <LampWithCaption caption="6" side="top" gap={4} />
          <LampWithCaption caption="7" side="top" gap={4} />
          <LampWithCaption caption="8" side="top" gap={4} />
          <LampWithCaption caption="9" side="top" gap={4} />
        </ChannelsGrid>
        <div
          style={{
            marginBottom: 10,
            position: 'absolute',
            bottom: '-22px',
            left: '20px',
            background: '#e9e9e9',
            padding: '2px 5px',
          }}
        >
          ПРИОРИТЕТ
        </div>
        <CircleSelect />
      </ChannelsWrapper>
      <ButtonWithCaption caption="КОНТРОЛЬ" side="top" gap={10} />
      <BottomScrew />
    </PanelLayout>
  );
};

export default KP4;

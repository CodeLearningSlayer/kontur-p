import React, { useState } from 'react';
import styled from 'styled-components';
import PanelLayout from '../../../layouts/PanelLayout';
import TopScrew from '../../panels-components/TopScrew';
import CircleSelect from '../../panels-components/CircleSelect';
import LampWithCaption from '../../panels-components/LampWithCaption';
import ButtonWithCaption from '../../panels-components/ButtonWithCaption';
import BottomScrew from '../../panels-components/BottomScrew';
import { KP4Props } from '../../kontur/KonturViewModel';

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

const KP4 = (props: KP4Props) => {
  const { onChangeCircleSelectPosition, onChangeControl, control } = props
  const [ active, setActive ] = useState(control)
  if (control) {
    setInterval(() => {
      setActive(!active)
    }, 2000)
  }
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
          <LampWithCaption caption="1" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="2" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="3" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="4" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="5" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="6" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="7" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="8" side="top" gap={4} isActive={active} needToBlink={true} />
          <LampWithCaption caption="9" side="top" gap={4} isActive={active} needToBlink={true} />
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
        <CircleSelect onChange={onChangeCircleSelectPosition} />
      </ChannelsWrapper>
      <ButtonWithCaption caption="КОНТРОЛЬ" side="top" gap={10} onChange={onChangeControl} />
      <BottomScrew />
    </PanelLayout>
  );
};

export default KP4;

import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import PanelLayout from '../../layouts/PanelLayout';
import LampWithCaption from '../panels-components/LampWithCaption';
import DigitalScreen from '../panels-components/DigitalScreen';
import ButtonWithCaption from '../panels-components/ButtonWithCaption';
import Tumbler from '../Tumbler';
import Screw from '../Screw';
import TopScrew from '../panels-components/TopScrew';

const InfoScreen = styled.div`
  text-align: center;
  margin-bottom: 30px;
  max-width: 100px;
`;

const GroupScreen = styled.div`
  margin-bottom: 30px;
  text-align: center;
  max-width: 100px;
`;

const OffsetBlock = styled.div`
  margin-bottom: 40px;
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const StyledLamp = styled(LampWithCaption)`
  margin-bottom: 50px;
`;

const StyledButtonWithCaption = styled(ButtonWithCaption)`
  margin-bottom: 16px;
`;

const KP2 = () => {
  const [informFirstState, setInformFirstState] = useState('');
  const [informSecondState, setInformSecondState] = useState('');
  const [groupState, setGroupState] = useState('');

  const handleFirstInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInformFirstState(target.value);
  };

  const handleSecondInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInformSecondState(target.value);
  };

  const handleGroupInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setGroupState(target.value);
  };

  return (
    <PanelLayout>
      <TopScrew name="КП2" />
      <StyledLamp caption="ПРИЕМ" side="top" />
      <InfoScreen>
        <div style={{ marginBottom: 3 }}>ИНФОРМ.</div>
        <DigitalScreen value={informFirstState} setValue={handleFirstInput} />
        <DigitalScreen value={informSecondState} setValue={handleSecondInput} />
      </InfoScreen>
      <GroupScreen>
        <div style={{ marginBottom: 3 }}>ГРУППА</div>
        <DigitalScreen value={groupState} setValue={handleGroupInput} />
      </GroupScreen>
      <OffsetBlock>
        <div style={{ marginBottom: 8, textAlign: 'center' }}>СДВИГ</div>
        <ButtonsBlock>
          <ButtonWithCaption caption="1" side="top" gap={0} />
          <ButtonWithCaption caption="10" side="top" gap={0} />
        </ButtonsBlock>
      </OffsetBlock>
      <StyledButtonWithCaption caption="НАЧ. ИНФОРМ." side="top" gap={3} />
      <Tumbler
        direction="vertical"
        caption="КОНТРОЛЬ"
        topCaption="КОНТРОЛЬ 2"
      />
      <Screw />
    </PanelLayout>
  );
};

export default KP2;

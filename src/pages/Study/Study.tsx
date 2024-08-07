import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import StepsPanel from '../../components/StepsPanel';
import Kontur from '../../components/kontur/Kontur';
import { KonturViewModel } from '../../components/kontur/KonturViewModel';
import { observer } from 'mobx-react';
import CurrentStepPanel from '../../components/CurrentStepPanel';

const StudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

const StudyPanel = styled.div`
    display: grid;
  grid-template-columns: 1fr 460px;
  gap: 10px;
`;

const CurrentStep = styled.div``

const StudyElement = () => {
  const [vm] = useState(new KonturViewModel())
  return (
    <StudyWrapper>
      <Kontur data={vm.data} />
      <StudyPanel>
        <StepsPanel steps={vm.guideSteps} currentIndex={vm.currentIndex} />
        <CurrentStepPanel currentStep={vm.guideSteps[vm.currentIndex].title} />
      </StudyPanel>
    </StudyWrapper>
  );
};
const Study = observer(StudyElement)
export default Study;

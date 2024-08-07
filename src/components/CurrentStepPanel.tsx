import React, { FC } from 'react';
import styled from 'styled-components';

interface CurrentStepPanelProps {
  currentStep: string
}

const CurrentStepPanelWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`
const CurrentStepCaption = styled.div``;

const CurrentStepPanel: FC<CurrentStepPanelProps> = ({currentStep}) => {
  return (
    <CurrentStepPanelWrapper>
      <CurrentStepCaption>Текущий щаг</CurrentStepCaption>
      <span style={{fontWeight: 700}}>{currentStep}</span>
    </CurrentStepPanelWrapper>
  );
};

export default CurrentStepPanel;

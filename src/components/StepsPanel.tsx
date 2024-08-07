import React, { FC } from 'react';
import styled from 'styled-components';

interface StepsPanelProps {
  steps: Array<{
    title: string;
    isCompleted: boolean;
  }>;
  currentIndex: number
  className?: string;
}

const StepItem = styled.div<{ $isComplete: boolean }>`
  ${({ $isComplete }) => ($isComplete ? `color: green; font-weight: bold;` : 'color: inherit')}
`;

const StepsWrapper = styled.div`
  overflow-y: scroll;
  padding: 10px;
`;

const StepsPanel: FC<StepsPanelProps> = ({ steps, currentIndex, className }) => {
  return (
    <StepsWrapper className={className}>
      {steps.map((item, index) => (
        <StepItem
          key={item.title + Date.now() + Math.random()}
          $isComplete={item.isCompleted}
        >
          {item.title} <strong>{index === currentIndex ? '🢀' : ''}</strong>
        </StepItem>
      ))}
    </StepsWrapper>
  );
};

export default StepsPanel;

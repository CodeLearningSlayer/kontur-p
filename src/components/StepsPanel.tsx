import React, { FC } from 'react';
import styled from 'styled-components';

interface StepsPanelProps {
  steps: Array<{
    title: string;
    isComplete: boolean;
  }>;
  className?: string;
}

const StepItem = styled.div<{ $isComplete: boolean }>`
  ${({ $isComplete }) => ($isComplete ? `color: green` : 'color: inherit')}
`;

const StepsWrapper = styled.div`
  overflow-y: scroll;
  padding: 10px;
`;

const StepsPanel: FC<StepsPanelProps> = ({ steps, className }) => {
  return (
    <StepsWrapper className={className}>
      {steps.map((item) => (
        <StepItem
          key={item.title + Date.now() + Math.random()}
          $isComplete={item.isComplete}
        >
          {item.title}
        </StepItem>
      ))}
    </StepsWrapper>
  );
};

export default StepsPanel;

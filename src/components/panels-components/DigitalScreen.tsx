import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

interface ScreenProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  value: string;
  setValue: (e: ChangeEvent) => void;
}

const Input = styled.input`
  border: none;
  color: #00b600;
  background: transparent;
  font-weight: 700;
  font-size: 20px;
  min-height: 40px;
`;

const StyledScreen = styled.div`
  background: #000000;
  border: 2px solid #c4c4c4;
`;

const DigitalScreen: FC<ScreenProps> = ({ className, value, setValue }) => {
  return (
    <StyledScreen className={className}>
      <Input
        value={value}
        type="text"
        inputMode="numeric"
        onChange={setValue}
      />
    </StyledScreen>
  );
};

export default DigitalScreen;

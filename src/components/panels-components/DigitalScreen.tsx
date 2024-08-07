import React, { ChangeEvent, FC, useEffect } from 'react';
import styled from 'styled-components';

interface ScreenProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  value: string;
  isActive: boolean
  onChange: (value?: string) => void;
  setValue: (e: ChangeEvent) => void;
}

const Input = styled.input`
  border: none;
  color: #00b600;
  background: transparent;
  font-weight: 700;
  min-height: 40px;
  width: 100%;
  text-align: center;
  letter-spacing: 7px;
  font-size: 30px;
  padding-left: 7px;
`;

const StyledScreen = styled.div`
  background: #000000;
  border: 2px solid #c4c4c4;
`;

const DigitalScreen: FC<ScreenProps> = ({ className, value, setValue, onChange, isActive }) => {
  const displayValue = isActive ? value : '';
  const onChangeInput = (e: ChangeEvent) => {
    const displayValue = isActive ? (e.target as HTMLInputElement).value : '';
    onChange(displayValue)
  }
  return (
    <StyledScreen className={className}>
      <Input
        value={displayValue}
        type="text"
        inputMode="numeric"
        onChange={onChangeInput}
        maxLength={3}
      />
    </StyledScreen>
  );
};

export default DigitalScreen;

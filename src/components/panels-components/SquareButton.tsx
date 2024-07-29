import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import styled from 'styled-components';
import squareButtonRed from '../../../assets/images/components/button/buttonSquareRed.png';
import squareButtonBlack from '../../../assets/images/components/button/buttonSquareBlackLarge.png';

const StyledButton = styled.button<{
  $isPressed: boolean;
  $color: 'black' | 'red';
}>`
  ${({ $color }) =>
    $color === 'black'
      ? `background: url(${squareButtonBlack})`
      : `background: url(${squareButtonRed})`};
  color: white;
  border-width: 0;
  width: 40px;
  margin: 0 auto;
  height: 40px;
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  ${({ $isPressed }) =>
    $isPressed
      ? `transform: scale(0.95);
      border-width: 2px;
      border-style: inset;`
      : ''};
`;

interface SquareButtonProps {
  color: 'black' | 'red';
  className?: string;
  buttonType: 'hold' | 'click';
  outerText?: string;
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: fit-content;
  gap: 4px;
  font-size: 12px;
  white-space: pre-wrap;
  text-align: center;
`;

const SquareButton: FC<PropsWithChildren<SquareButtonProps>> = ({
  color,
  className,
  buttonType,
  outerText,
  children,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    console.log(isPressed);
  }, [isPressed]);

  const onMouseDown = () => {
    if (!(buttonType === 'hold')) return;
    setIsPressed(true);
  };

  const onMouseUp = () => {
    if (!(buttonType === 'hold')) return;
    setIsPressed(false);
  };

  const onClick = () => {
    if (!(buttonType === 'click')) return;
    setIsPressed((currValue) => !currValue);
  };

  return (
    <ButtonWrapper>
      <div style={{ textAlign: 'center' }}>{outerText}</div>
      <StyledButton
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onClick={onClick}
        $isPressed={isPressed}
        $color={color}
        className={className}
      >
        {children}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default SquareButton;

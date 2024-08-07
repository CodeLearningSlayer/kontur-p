import React, { useState } from 'react';
import styled from 'styled-components';
import buttonRound from '../../assets/images/components/button/buttonRoundType8.png';
import buttonRoundClicked from '../../assets/images/components/button/buttonRoundType4.png';
import buttonRound1 from '../../assets/images/components/button/buttonRound.png';

const StyledButton = styled.button`
  aspect-ratio: 1;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: #cecece;
  border-radius: 50%;
  cursor: pointer;
`;

const ButtonInner = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 20px;
  height: 20px;
  ${({ $isActive }) =>
    $isActive ? 'box-shadow: inset 0px 0px 5px 3px black;' : ''};
`;

const StyledImg = styled.img<{ $mouseHold: boolean }>`
  width: 60px;
  object-fit: contain;
  ${({ $mouseHold }) => ($mouseHold ? 'transform: scale(0.98)' : '')};
`;

const ButtonRound = ({ type, onChange }: { type: 'hold' | 'click', onChange?: () => void }) => {
  const [mouseHold, setMouseHold] = useState(false);

  const onMouseDown = () => {
    if (!(type === 'hold')) return;
    setMouseHold(true);
    onChange ? onChange() : () => {};
  };

  const onMouseUp = () => {
    if (!(type === 'hold')) return;
    setMouseHold(false);
    onChange ? onChange() : () => {};
  };

  const onClick = () => {
    if (!(type === 'click')) return;
    setMouseHold((currValue) => !currValue);
    onChange ? onChange() : () => {};
  };

  return (
    <StyledButton
      type="button"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
    >
      <ButtonInner $isActive={mouseHold} />
      <StyledImg src={buttonRound1} alt="button" $mouseHold={mouseHold} />
    </StyledButton>
  );
};

export default ButtonRound;

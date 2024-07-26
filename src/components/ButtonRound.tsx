import React, { useState } from 'react';
import styled from 'styled-components';
import buttonRound from '../../assets/images/components/button/buttonRoundType8.png';
import buttonRoundClicked from '../../assets/images/components/button/buttonRoundType4.png';

const StyledButton = styled.button`
  aspect-ratio: 1;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`;

const StyledImg = styled.img<{ $mouseHold: boolean }>`
  ${({ $mouseHold }) => ($mouseHold ? 'width: 40px' : 'width: 30px')};
  ${({ $mouseHold }) => ($mouseHold ? 'height: 40px' : 'height: 30px')};
  ${({ $mouseHold }) => $mouseHold && 'margin: 2px 0px 0 3px'};
  object-fit: fit;
`;

const ButtonRound = ({ type }: { type: 'hold' | 'click' }) => {
  const [mouseHold, setMouseHold] = useState(false);

  const onMouseDown = () => {
    if (!(type === 'hold')) return;
    setMouseHold(true);
  };

  const onMouseUp = () => {
    if (!(type === 'hold')) return;
    setMouseHold(false);
  };

  const onClick = () => {
    if (!(type === 'click')) return;
    setMouseHold((currValue) => !currValue);
  };

  return (
    <StyledButton
      type="button"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
    >
      <StyledImg
        src={mouseHold ? buttonRoundClicked : buttonRound}
        alt="button"
        $mouseHold={mouseHold}
      />
    </StyledButton>
  );
};

export default ButtonRound;

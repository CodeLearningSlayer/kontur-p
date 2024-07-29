import React, { FC, useMemo, useState } from 'react';
import styled from 'styled-components';
import tumblerUp from '../../assets/images/components/switch/tumblerType4Up.png';
import tumblerLeft from '../../assets/images/components/switch/tumblerType4Left.png';
import tumblerRight from '../../assets/images/components/switch/tumblerType4Right.png';
import tumblerDown from '../../assets/images/components/switch/tumblerType4Down.png';

interface TumblerProps {
  direction: 'vertical' | 'horizontal';
  caption?: string;
  // eslint-disable-next-line react/require-default-props
  topCaption?: string;
}

const TumblerWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  object-fit: cover;
  border: none;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Tumbler: FC<TumblerProps> = ({ direction, caption, topCaption }) => {
  const [tumblerState, setTumblerState] = useState(false);

  const onClick = () => {
    setTumblerState((state) => !state);
  };

  const tumblerImg = useMemo(() => {
    if (direction === 'horizontal') {
      return tumblerState ? tumblerRight : tumblerLeft;
    }
    return tumblerState ? tumblerDown : tumblerUp;
  }, [direction, tumblerState]);

  return (
    <TumblerWrapper>
      {topCaption && <div>{topCaption}</div>}
      <Button type="button" onClick={onClick}>
        <img src={tumblerImg} alt="switch up" />
      </Button>
      <div>{caption}</div>
    </TumblerWrapper>
  );
};

export default Tumbler;

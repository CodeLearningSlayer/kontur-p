import React, { FC, useMemo, useState } from 'react';
import styled from 'styled-components';
import tumblerUp from '../../assets/images/components/switch/tumblerType4Up.png';
import tumblerLeft from '../../assets/images/components/switch/tumblerType4Left.png';
import tumblerRight from '../../assets/images/components/switch/tumblerType4Right.png';
import tumblerDown from '../../assets/images/components/switch/tumblerType4Down.png';

interface TumblerProps {
  direction: 'vertical' | 'horizontal';
  caption?: string;
  className?: string;
  // eslint-disable-next-line react/require-default-props
  topCaption?: string;
  onChange: () => void
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
  filter: drop-shadow(2px 2px 4px);
  align-items: center;
  margin: 0 0 -7px;
  cursor: pointer;
`;

const Tumbler: FC<TumblerProps> = ({
  direction,
  caption,
  topCaption,
  className,
  onChange
}) => {
  const [tumblerState, setTumblerState] = useState(true);

  const onClick = () => {
    setTumblerState((state) => !state);
    onChange();
  };

  const tumblerImg = useMemo(() => {
    return tumblerState ? tumblerUp : tumblerDown;
  }, [direction, tumblerState]);

  return (
    <TumblerWrapper className={className}>
      {topCaption && <div>{topCaption}</div>}
      <Button type="button" onClick={onClick}>
        <img src={tumblerImg} alt="switch up" />
      </Button>
      <div>{caption}</div>
    </TumblerWrapper>
  );
};

export default Tumbler;

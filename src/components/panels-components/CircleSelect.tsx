/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useMemo, useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import styled from 'styled-components';
import circleSelect from '../../../assets/images/components/select/toggleType6.png';

const CircleSelectImg = styled.img<{
  $position: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  ${({ $position }) =>
    `transform: translateX(-50%) translateY(-50%) rotate(calc(${$position * 38}deg + 195deg))`};
`;

interface CircleSelectProps {
  className?: string;
}

const StyledRadio = styled(Radio)`
  & span.ant-radio + * {
    padding-inline-start: 0px;
    padding-inline-end: 0px;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  height: 90px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const CircleSelect: FC<CircleSelectProps> = ({ className }) => {
  const [position, setPosition] = useState(0);

  const handleClick = () => {
    if (position < 9) {
      setPosition((curPos) => curPos + 1);
    } else {
      setPosition(0);
    }
  };

  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    if (position > 0) {
      setPosition((pos) => pos - 1);
    } else {
      setPosition(9);
    }
  };

  const radios = useMemo(
    () =>
      Array(10)
        .fill(null)
        .map((value, index) => index),
    [],
  );

  const handleChange = (e: RadioChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPosition(+target.value);
  };

  const activeOptions = useMemo(() => {
    if (position === 0) {
      return [1, 9, 0];
    }
    if (position === 9) {
      return [8, 0, 9];
    }
    return [position - 1, position + 1, position];
  }, [position]);

  const calculatePosition = (index: number) => {
    let angle;
    if (index < 5) {
      angle = (index / 10) * 2 * Math.PI + 89.88;
    } else {
      angle = (index / 10) * 2 * Math.PI + 360.12;
    }
    const radius = 50; // Радиус окружности
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <CircleWrapper className={className}>
      <CircleSelectImg
        src={circleSelect}
        $position={position}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      />
      <Radio.Group onChange={handleChange} defaultValue="0" value={position}>
        {radios.map((item, index) => {
          const { x, y } = calculatePosition(index);
          return (
            <StyledRadio
              key={item}
              value={item}
              disabled={!activeOptions.includes(item)}
              style={{
                position: 'absolute',
                left: `calc(55% + ${x}px ${index < 5 ? '- 12px' : '+ 0px'})`,
                top: `calc(50% + ${y}px ${index < 5 ? '+ 1px' : ''})`,
                transform: 'translate(-50%, -50%)',
                flexDirection: x < 0 ? 'row-reverse' : 'row',
                gap: 3,
                paddingInline: 0,
                paddingInlineStart: 0,
                paddingInlineEnd: 0,
              }}
            >
              {item}
            </StyledRadio>
          );
        })}
      </Radio.Group>
    </CircleWrapper>
  );
};

export default CircleSelect;

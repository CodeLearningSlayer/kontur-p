import React, { FC, useMemo, useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import styled from 'styled-components';
import circleSelect from '../../../assets/images/components/select/toggleType6.png';
import getCircleCaptionOffsetBySide from '../../utils/getCircleCaptionOffsetBySide';

const CircleSelectImg = styled.img<{
  $position: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  ${({ $position }) =>
    `transform: translateX(-50%) translateY(-50%) rotate(calc(${$position * 37}deg + 180deg))`};
`;

interface CircleSelectProps {
  className?: string;
  onChange: (position: number) => void;
}

const StyledRadio = styled(Radio)<{
  $side: 'left' | 'right' | 'top' | 'bottom';
}>`
  & span.ant-radio + * {
    padding-inline-start: 0px;
    position: absolute;
    ${(props) => getCircleCaptionOffsetBySide(props.$side)};
    padding-inline-end: 0px;
    white-space: nowrap;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  height: 90px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const CircleSelect: FC<CircleSelectProps> = ({ className, onChange }) => {
  const [position, setPosition] = useState(1);

  const handleClick = () => {
    let newPosition = position < 9 ? position + 1 : 0;
    setPosition(newPosition)
    onChange(newPosition)
  };

  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    let newPosition = position > 0 ? position - 1 : 9;
    setPosition(newPosition)
    onChange(newPosition)
  };

  const radios = [
    '+9В РЕЗЕРВ',
    'откл',
    '+9В',
    '+5В ст',
    '+12В',
    'СЕТЬ',
    '+20В',
    '-20В',
    '+15В',
    '-15В',
  ];

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

  const getSideByNumber = (index: number) => {
    if (index === 0) {
      return 'bottom';
    }
    if (index > 0 && index < 5) {
      return 'left';
    }
    if (index === 5) {
      return 'top';
    }
    return 'right';
  };

  const calculatePosition = (index: number) => {
    const angle = (index / 10) * 2 * Math.PI + 89.58;
    const radius = 65; // Радиус окружности
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
              value={index}
              disabled={!activeOptions.includes(index)}
              $side={getSideByNumber(index)}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                flexDirection: x < 0 ? 'row-reverse' : 'row',
                gap: 5,
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

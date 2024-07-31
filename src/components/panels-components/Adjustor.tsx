import React, { FC } from 'react';
import styled from 'styled-components';
import adjustor from '../../../assets/images/components/adjustor.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StyledImg = styled.img`
  width: 60px;
  height: auto;
  filter: drop-shadow(5px 5px 4px);
`;

interface AdjustorProps {
  className?: string;
  caption: string;
}

const Adjustor: FC<AdjustorProps> = ({ caption, className }) => {
  return (
    <Wrapper className={className}>
      <StyledImg src={adjustor} />
      <div>{caption}</div>
    </Wrapper>
  );
};

export default Adjustor;

import React from 'react';
import styled from 'styled-components';
import fastening from '../../../assets/images/components/fastening.png';

const StyledImg = styled.img`
  width: 100px;
  height: auto;
  filter: drop-shadow(5px 5px 5px);
`;

const ImgWrapper = styled.div`
  object-fit: contain;
`;

const Fastening = ({ className }: { className?: string }) => {
  return (
    <ImgWrapper className={className}>
      <StyledImg src={fastening} />
    </ImgWrapper>
  );
};

export default Fastening;

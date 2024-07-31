import React from 'react';
import styled from 'styled-components';
import screw from '../../assets/images/components/screw.png';

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  filter: drop-shadow(2px 2px 2px);
`;

const ScrewWrapper = styled.div`
  width: 45px;
  height: auto;
`;

const Screw = ({ className }: { className?: string }) => {
  return (
    <ScrewWrapper className={className}>
      <StyledImg src={screw} alt="screw" />
    </ScrewWrapper>
  );
};

export default Screw;

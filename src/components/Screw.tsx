import React from 'react';
import styled from 'styled-components';
import screw from '../../assets/images/components/screw.png';

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Screw = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <StyledImg src={screw} alt="screw" />
    </div>
  );
};

export default Screw;

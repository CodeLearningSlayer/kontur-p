import React from 'react';
import styled from 'styled-components';
import Screw from '../Screw';

const TopScrewWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TopScrew = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <TopScrewWrapper className={`top-screw ${className ?? ''}`}>
      <div>{name}</div>
      <Screw />
    </TopScrewWrapper>
  );
};

export default TopScrew;

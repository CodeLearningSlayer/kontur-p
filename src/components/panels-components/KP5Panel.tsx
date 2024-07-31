import React from 'react';
import styled from 'styled-components';
import Screw from '../Screw';

const StyledPanel = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: #bdbdbd;
  box-shadow: 4px 5px 5px 5px #6d6d6d;
`;
const TopLeftScrew = styled(Screw)`
  top: 5px;
  left: 5px;
  position: absolute;
`;
const TopRightScrew = styled(Screw)`
  top: 5px;
  right: 5px;
  position: absolute;
`;
const BottomLeftScrew = styled(Screw)`
  bottom: 5px;
  left: 5px;
  position: absolute;
`;
const BottomRightScrew = styled(Screw)`
  bottom: 5px;
  right: 5px;
  position: absolute;
`;
const PanelInner = styled.div`
  display: grid;
  position: absolute;
  top: 40px;
  border-radius: 10px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  gap: 3px;

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #e9e9e9;
  }
`;

const KP5Panel = ({ className }: { className?: string }) => {
  return (
    <StyledPanel className={className}>
      <TopLeftScrew />
      <TopRightScrew />
      <BottomLeftScrew />
      <BottomRightScrew />
      <PanelInner>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </PanelInner>
    </StyledPanel>
  );
};

export default KP5Panel;

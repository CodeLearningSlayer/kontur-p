import React from 'react';
import styled from 'styled-components';
import PanelLayout from '../../layouts/PanelLayout';
import TopScrew from '../panels-components/TopScrew';
import LampWithCaption from '../panels-components/LampWithCaption';
import Tumbler from '../Tumbler';
import ButtonWithCaption from '../panels-components/ButtonWithCaption';
import Fastening from '../panels-components/Fastening';
import BottomScrew from '../panels-components/BottomScrew';

const KP6LampBlock = styled.div`
  display: grid;
  grid-template-columns: 74px auto 74px;
  gap: 10px;
  margin-bottom: 10px;
  align-items: start;
`;
const KP6LampBlockCaption = styled.div`
  text-align: center;
  margin-bottom: 8px;
`;

const DocumentBlock = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const DocumentBlockLeftPointer = styled.div`
  border: 1px solid black;
  border-top: none;
  height: 93%;
  width: 60px;
  border-right: none;
  margin-left: 20px;
  margin-bottom: 30px;
`;
const DocumentBlockRightPointer = styled.div`
  border: 1px solid black;
  border-top: none;
  height: 93%;
  width: 60px;
  border-left: none;
  margin-right: 20px;
  margin-bottom: 30px;
`;

const DocumentBlockCaption = styled.div`
  background: #e9e9e9;
  margin-top: 12px;
  font-size: 16px;
  margin-bottom: 5px;
`;

const StyledTumbler = styled(Tumbler)`
  margin: 10px 0;
`;

const StyledFastening = styled(Fastening)`
  margin: 5px;
`;

const KP6 = () => {
  return (
    <PanelLayout>
      <TopScrew name="КП6" />
      <KP6LampBlockCaption>СБОЙ</KP6LampBlockCaption>
      <KP6LampBlock>
        <LampWithCaption caption="ПЕРЕДАЧА" side="bottom" />
        <LampWithCaption />
        <LampWithCaption caption="РЕЖИМ 3" side="bottom" />
      </KP6LampBlock>
      <DocumentBlockCaption>ДОКУМЕНТИРОВАНИЕ</DocumentBlockCaption>
      <DocumentBlock>
        <DocumentBlockLeftPointer />
        <StyledTumbler direction="vertical" caption="ОТКЛ" />
        <DocumentBlockRightPointer />
      </DocumentBlock>
      <ButtonWithCaption caption="ПУСК" side="bottom" gap={3} />
      <StyledFastening />
      <StyledTumbler direction="vertical" caption="СИНХР" topCaption="АСИНХР" />
      <StyledTumbler
        direction="vertical"
        caption="РЕЖИМ 1"
        topCaption="РЕЖИМ 2"
      />
      <StyledFastening />
      <BottomScrew />
    </PanelLayout>
  );
};

export default KP6;

import React from 'react';
import styled from 'styled-components';
import KP1 from './panels/KP1';
import KP2 from './panels/KP2';
import KP3 from './panels/KP3';
import KP4 from './panels/KP4';
import KP5 from './panels/KP5';
import KP6 from './panels/KP6';
import KP7 from './panels/KP7';

const KonturWrapper = styled.main`
  background-color: #e9e9e9;
  display: grid;
  grid-template-columns: 175px 160px 180px 230px 580px 200px 250px;
  height: 800px;
`;

const Kontur = () => {
  return (
    <KonturWrapper>
      <KP1 />
      <KP2 />
      <KP3 />
      <KP4 />
      <KP5 />
      <KP6 />
      <KP7 />
    </KonturWrapper>
  );
};

export default Kontur;

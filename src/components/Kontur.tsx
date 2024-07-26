import React from 'react';
import styled from 'styled-components';
import KP1 from './panels/KP1';
import KP2 from './panels/KP2';

const KonturWrapper = styled.main`
  background-color: #e9e9e9;
  display: grid;
  grid-template-columns: repeat(4, 330px);
  height: 100vh;
`;

const Kontur = () => {
  return (
    <KonturWrapper>
      <KP1 />
      <KP2 />
    </KonturWrapper>
  );
};

export default Kontur;

import React, { useState } from 'react';
import styled from 'styled-components';
import KP1 from '../panels/KP1';
import KP2 from '../panels/KP2/KP2';
import KP3 from '../panels/KP3/KP3';
import KP4 from '../panels/KP4/KP4';
import KP5 from '../panels/KP5/KP5';
import KP6 from '../panels/KP6';
import { KonturViewModel, KP2Props, KP3Props, KP4Props, KP5Props, KP6Props, KP7Props } from './KonturViewModel';
import { observer } from 'mobx-react';
import KP7 from '../panels/KP7/KP7';
import Guide from '../panels/guide/Guide';

const KonturWrapper = styled.main`
  background-color: #e9e9e9;
  display: grid;
  grid-template-columns: 175px 160px 180px 230px 580px 200px 250px;
  height: 850px;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface KonturPanelsProps {
  KP2: KP2Props,
  KP3: KP3Props
  KP4: KP4Props
  KP5: KP5Props
  KP6: KP6Props
  KP7: KP7Props
}

const KonturElement = (props: { data: KonturPanelsProps }) => {
  const { KP2: KP2Props, KP3: KP3Props, KP4: KP4Props, KP5: KP5Props, KP6: KP6Props, KP7: KP7Props } = props.data;
  return (
    <MainLayout>
      <KonturWrapper>
        <KP1 />
        <KP2 {...KP2Props} />
        <KP3 {...KP3Props} />
        <KP4 {...KP4Props} />
        <KP5 {...KP5Props} />
        <KP6 {...KP6Props} />
        <KP7 {...KP7Props} />
      </KonturWrapper>
    </MainLayout>
  );
};

const Kontur = observer(KonturElement)
export default Kontur;

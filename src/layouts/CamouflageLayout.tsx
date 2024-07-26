/* eslint-disable react/function-component-definition */
import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
// @ts-ignore
import camo from '../../assets/images/background.jpeg';

const CamoLayout = styled.div`
  background-image: url(${camo});
  height: 100vh;
  color: white;
  background-size: cover;
  padding: 12px;
`;

const CamouflageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <CamoLayout>{children}</CamoLayout>;
};

export default CamouflageLayout;

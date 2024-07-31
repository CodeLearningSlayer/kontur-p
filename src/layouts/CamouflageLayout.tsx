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

// eslint-disable-next-line react/require-default-props
const CamouflageLayout: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return <CamoLayout className={className}>{children}</CamoLayout>;
};

export default CamouflageLayout;

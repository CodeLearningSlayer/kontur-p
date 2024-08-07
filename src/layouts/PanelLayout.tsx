import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const PanelLayoutWrapper = styled.div`
  padding: 20px 10px;
  border: 2px solid #a7a7a7;
  border-top: 4px solid #a7a7a7;
  border-bottom: 4px solid #a7a7a7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PanelLayout: FC<PropsWithChildren> = ({ children }) => {
  return <PanelLayoutWrapper>{children}</PanelLayoutWrapper>;
};

export default PanelLayout;

import { ReactElement } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const FooterLayout = styled.div`
  display: flex;
  gap: 10px;
`;

const MainLayout = styled.div`

`;

const AuthElement = (): ReactElement => {
  return (
    <MainLayout>
      <FooterLayout>
        <Button>Вход</Button>
        <Button>Регистрация</Button>
      </FooterLayout>
    </MainLayout>
  );
};
export const Auth = AuthElement

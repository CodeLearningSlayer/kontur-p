import { ReactElement, useContext, useEffect, useState } from 'react';
import { Button, Input, InputNumber, Layout, Space } from 'antd';
import styled from 'styled-components';
import { Content, Footer } from 'antd/es/layout/layout';
import { AuthViewModel, User } from './AuthViewModel';
import { observer } from 'mobx-react';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';


const StyledLayout = styled(Layout)`
  background: none;
`;

const StyledContent = styled(Content)`
  padding: 10px;
`;

const StyledFooter = styled(Footer)`
  background: none;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const AuthElement = (props: { setContextUser: (user: User) => void }): ReactElement => {
  const [vm] = useState(() => new AuthViewModel())
  const { setContextUser } = props

  return (
    <StyledLayout>
      <StyledContent>
        <Space style={{ width: '350px'}} direction={'vertical'}>
          <Space.Compact>
            <Input style={{ width: '20%', background: '#d9d3d3', color: '#000' }} disabled={true} defaultValue="ФИО" />
            <Input style={{ width: '80%' }} placeholder={"Петров А. С."} onChange={vm.onChangeName} />
          </Space.Compact>
          <Space direction={'horizontal'}>
            <Space.Compact>
              <Input style={{ width: '40%', background: '#d9d3d3', color: '#000' }} disabled={true} defaultValue="Курс" />
              <InputNumber style={{ width: '60%' }} placeholder={"3"} onChange={vm.onChangeCourse} />
            </Space.Compact>
            <Space.Compact>
              <Input style={{ width: '40%', background: '#d9d3d3', color: '#000' }} disabled={true} defaultValue="Взвод" />
              <InputNumber style={{ width: '60%' }} placeholder={useContext(AppContext).name} onChange={vm.onChangeTroop} />
            </Space.Compact>
          </Space>
        </Space>
      </StyledContent>
      <StyledFooter>
        <Button onClick={() => vm.onClickAuth(setContextUser)}>
          Войти
        </Button>
      </StyledFooter>
    </StyledLayout>
  );
};
export const Auth = observer(AuthElement)

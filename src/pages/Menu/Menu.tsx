import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Button, Radio, Space } from 'antd';
import './Menu.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CamouflageLayout from '../../layouts/CamouflageLayout';

const MenuInner = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 20px;
  flex-grow: 1;
`;

const MenuTitle = styled.h1`
  text-align: center;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: end;
  flex-grow: 2;
`;

const StyledRadio = styled(Radio)`
  color: white;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

const Menu = () => {
  const [value, setValue] = useState<'study' | 'test'>('study');

  const onChange = (e: RadioChangeEvent) => {
    console.log(e);
    setValue(e.target.value);
  };

  const onBeginClick = () => {
    const windowHeight = value == 'study' ? 1100 : 850
    window.electron.ipcRenderer.sendAsyncMessage('resize-window', 1781, windowHeight)
    window.electron.ipcRenderer.sendAsyncMessage('redirect', `/${value}`)
  };

  return (
    <CamouflageLayout>
      <div className="menu">
        <MenuTitle className="menu-title">Меню</MenuTitle>
        <MenuInner>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <StyledRadio value="study">Обучение</StyledRadio>
              <StyledRadio value="test">Тест</StyledRadio>
            </Space>
          </Radio.Group>
        </MenuInner>
        <Buttons>
          <Button onClick={onBeginClick}>Начать</Button>
          <Button>Выход</Button>
        </Buttons>
      </div>
    </CamouflageLayout>
  );
};

export default Menu;

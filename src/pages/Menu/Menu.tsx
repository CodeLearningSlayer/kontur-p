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
  height: 100%;
  margin-bottom: 10px;
  padding: 20px;
  flex-grow: 1;
`;

const MenuTitle = styled.h1`
  text-align: center;
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

  const navigate = useNavigate();

  const onChange = (e: RadioChangeEvent) => {
    console.log(e);
    setValue(e.target.value);
  };

  const onBeginClick = () => {
    if (value === 'study') {
      navigate('/study');
    } else if (value === 'test') {
      navigate('/test');
    }
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

import React, { useRef } from 'react';
import styled from 'styled-components';
import Kontur from '../../components/Kontur';
import StepsPanel from '../../components/StepsPanel';

const StudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

const Study = () => {
  const steps = useRef([
    {
      title: 'На блоке КП7 тумблер СЕТЬ в положение ВКЛ',
      isComplete: true,
    },
    {
      title:
        'На блоке КП7 изменяя переключатель КОНТРОЛЬ, от +9В до +9В резерв, убедитесь, что стрелка вольтметра находится в закрашенном секторе',
      isComplete: false,
    },
    {
      title: 'На блоке КП5 тумблер ПЕРЕДАЧА установите в положение МТК',
      isComplete: false,
    },
    {
      title: 'На блоке КП5 нажмите кнопку С ОБЩИЙ',
      isComplete: false,
    },
    {
      title:
        'На блоке КП5 нажмите кнопку ПОДПИСЬ 3 двойным кликом мыши, нажатием кнопок 0-9 наберите трехзначную комбинацию',
      isComplete: false,
    },
    {
      title: 'На блоке КП5 нажмите кнопку ОТКЛ. ЗС',
      isComplete: false,
    },
    {
      title:
        'На блоке КП5 нажмите кнопку АДРЕС К двойным кликом мыши, нажатием кнопок 0-9 наберите трехзначную комбинацию, совпадающую с  ПОДПИСЬ 3',
      isComplete: false,
    },
    {
      title:
        'На блоке КП5 последовательно нажимая кнопку ГРУППА, с помощью кнопок 0-9 наберите трехзначные комбинации для групп 1-8',
      isComplete: false,
    },
    {
      title: 'На блоке КП4 переключатель ПРИОРИТЕТ поставьте в положение ОТКЛ',
      isComplete: false,
    },
    {
      title: 'На блоке КП4 нажмите кнопку КОНТРОЛЬ',
      isComplete: false,
    },
    {
      title: 'На блоке КП5 нажмите кнопку ПЕРЕДАЧА ВЫЗОВ',
      isComplete: false,
    },
    {
      title: 'На блоке КП5 нажмите кнопку НАБОР КК',
      isComplete: false,
    },
    {
      title: 'На блоке КП5 нажмите кнопку ПЕРЕДАЧА ИНФОРМАНЦИЯ',
      isComplete: false,
    },
    {
      title: 'На блоке КП5 нажмите кнопку ОТКЛ. ЗС',
      isComplete: false,
    },
  ]);

  return (
    <StudyWrapper>
      <Kontur />
      <StepsPanel steps={steps.current} />
    </StudyWrapper>
  );
};

export default Study;

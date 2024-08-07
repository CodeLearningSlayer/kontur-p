import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import PanelLayout from '../../../layouts/PanelLayout';
import TopScrew from '../../panels-components/TopScrew';
import Screw from '../../Screw';
import LampWithCaption from '../../panels-components/LampWithCaption';
import DigitalScreen from '../../panels-components/DigitalScreen';
import SquareButton from '../../panels-components/SquareButton';
import Tumbler from '../../Tumbler';
import KP5Panel from '../../panels-components/KP5Panel';
import BottomScrew from '../../panels-components/BottomScrew';
import { KP5Props } from '../../kontur/KonturViewModel';

const TopScrewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTopScrew = styled(TopScrew)`
  gap: 10px;
`;

const BottomScrewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  width: 100%;
  margin-top: auto;
`;

const ScreensWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const LampBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LampAttachedToBottom = styled(LampWithCaption)`
  justify-content: end;
`;

const LampLeftBlock = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  align-items: bottom;
  row-gap: 8px;
`;
const LampRightBlock = styled.div`
  display: grid;
  text-align: center;
  column-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 8px;
`;

const ScreenLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const SignButtonBlock = styled.div``;
const SignButtonTop = styled.div`
  border: 1px solid black;
  height: 10px;
  border-bottom: none;
  padding: 0 10px;
  margin: 0 15px;
  margin-bottom: 2px;
`;
const SignButtonCaption = styled.div`
  background: #e9e9e9;
  margin: -9px auto 0;
  padding: 0 4px;
  width: fit-content;
  font-size: 12px;
  text-align: center;
`;

const SignButtonBottom = styled.div`
  display: flex;
  gap: 5px;
`;

const ScreenMiddle = styled.div``;
const ScreenMiddleTop = styled.div`
  display: flex;
  gap: 2px;
  align-items: end;
  margin-bottom: 13px;
  padding: 0 15px;
`;
const ScreenMiddleBottom = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
`;

const ScreenGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ScreenRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
`;

const LeftPointer = styled.div`
  position: relative;
  width: 30px;
  height: 14px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: -7px;
`;
const RightPointer = styled.div`
  position: relative;
  width: 30px;
  height: 14px;
  margin-bottom: -7px;
  border-top: 1px solid black;
  border-right: 1px solid black;
`;

const StyledLamp = styled(LampWithCaption)`
  white-space: pre-line;
`;

const FirstScreen = styled(DigitalScreen)`
  width: 70px;
`;

const SecondScreen = styled(DigitalScreen)`
  width: 70px;
  flex-grow: 1;
`;

const ThirdScreen = styled(DigitalScreen)`
  width: 45px;
`;

const FourthScreen = styled(DigitalScreen)`
  width: 120px;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 7px;
  background: black;
  position: relative;
  top: 4px;
  margin-bottom: 7px;
`;

const KP5BottomPart = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

const KP5BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const KP5BottomMiddle = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KP5BottomRight = styled.div``;
const KP5BottomRightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 10px;
  margin: 8px;
`;

const CommunicationTract = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  margin-top: 15px;
  margin-bottom: -15px;
  background: #e9e9e9;
`;

const CommunicationTractWrapper = styled.div`
  padding: 5px 8px;
  margin-top: 10px;
  border: 1px solid black;
`;
const CommunicationTractCaption = styled.div`
  background: #e9e9e9;
  margin: 0 auto;
  margin-top: -13px;
  padding: 0 7px;
  width: fit-content;
`;

const TractBottomButtons = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 19px;
`;

const TractBottomButton = styled(SquareButton)`
  text-align: center;
  white-space: pre;
`;

const KP5 = (props: KP5Props) => {
  const { isSignEnable, isAddressEnable,
    onChangeTransfer, onChangeGeneral, onChangeOff, onChangeKk, onChangeInfo, onChangeIncome,
    onChangeSignEnable, onChangeAddressEnable, screenValue, onChangeScreenValue, controlLampActive,
    currentGroup, onChangeCurrentGroupName, onChangeCurrentGroup, currentGroupName
  } = props;
  const [adress, setAdress] = useState('');
  const [sign, setSign] = useState('');
  const [group, setGroup] = useState('');
  const [inform, setInform] = useState('');

  const handleAdressChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setAdress(target.value);
  };

  const handleSignChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    console.log("aaaaaaaaa")
    setSign(target.value);
  };

  const handleGroupChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setGroup(target.value);
  };

  const handleInformChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInform(target.value);
  };

  return (
    <PanelLayout>
      <TopScrewBlock>
        <StyledTopScrew name="КП5" />
        <Screw />
      </TopScrewBlock>
      <LampBlock>
        <LampLeftBlock>
          <LampAttachedToBottom caption="НЕИСПР." side="top" />
          <LampAttachedToBottom caption="КОНТРОЛЬ" side="top" isActive={controlLampActive} />
          <LampAttachedToBottom caption="СБОЙ ПОДПИСИ" side="top" />
        </LampLeftBlock>
        <LampRightBlock>
          <LampAttachedToBottom caption="ПЕРЕДАЧА" side="top" />
          <LampAttachedToBottom caption="ОТБОЙ" side="top" />
          <LampAttachedToBottom caption="ПРИЕМ" side="top" />
          <StyledLamp
            caption="ИНФОРМ.
          ПРИНЯТА"
            side="top"
          />
        </LampRightBlock>
      </LampBlock>
      <ScreensWrapper>
        <ScreenLeft>
          <FirstScreen value={adress} setValue={handleAdressChange} />
          <VerticalLine />
          <SquareButton buttonType="click" color="black" outerText="АДРЕС">
            УСС
          </SquareButton>
        </ScreenLeft>
        <ScreenMiddle>
          <ScreenMiddleTop>
            <LeftPointer />
            <SecondScreen value={screenValue} onChange={onChangeScreenValue} isActive={isAddressEnable || isSignEnable} setValue={handleSignChange} />
            <RightPointer />
          </ScreenMiddleTop>
          <ScreenMiddleBottom>
            <SquareButton outerText="АДРЕС" color="black" buttonType="click" value={isAddressEnable} onChange={onChangeAddressEnable}>
              К
            </SquareButton>
            <SignButtonBlock>
              <SignButtonTop>
                <SignButtonCaption>ПОДПИСЬ</SignButtonCaption>
              </SignButtonTop>
              <SignButtonBottom>
                <SquareButton color="red" buttonType="click">
                  1
                </SquareButton>
                <SquareButton color="red" buttonType="click">
                  2
                </SquareButton>
                <SquareButton color="red" buttonType="click" value={isSignEnable} onChange={onChangeSignEnable}>
                  3
                </SquareButton>
              </SignButtonBottom>
            </SignButtonBlock>
          </ScreenMiddleBottom>
        </ScreenMiddle>
        <ScreenGroup>
          <ThirdScreen value={currentGroup as string} isActive={currentGroup > 0} onChange={onChangeCurrentGroup} />
          <VerticalLine />
          <SquareButton buttonType="hold" color="black" outerText="ГРУППА" onChange={onChangeCurrentGroup} />
        </ScreenGroup>
        <ScreenRight>
          <FourthScreen value={screenValue} isActive={currentGroup > 0} onChange={onChangeScreenValue} />
          <SquareButton outerText="ОБЩИЙ" buttonType="hold" color="red" onChange={onChangeGeneral}>
            C
          </SquareButton>
        </ScreenRight>
      </ScreensWrapper>
      <KP5BottomPart>
        <KP5BottomLeft>
          <CommunicationTractWrapper>
            <CommunicationTractCaption>ПЕРЕДАЧА</CommunicationTractCaption>
            <CommunicationTract>
              <Tumbler direction="vertical" topCaption="МТК" onChange={onChangeTransfer} />
              <SquareButton buttonType="hold" color="black" outerText="ВЫЗОВ" onChange={onChangeIncome} />
              <SquareButton
                buttonType="hold"
                color="black"
                outerText="ПУ ОТБОЙ"
              />
              <SquareButton
                buttonType="hold"
                color="black"
                outerText="ИНФОРМ."
                onChange={onChangeInfo}
              />
            </CommunicationTract>
          </CommunicationTractWrapper>
          <TractBottomButtons>
            <TractBottomButton
              buttonType="hold"
              color="black"
              outerText="НАБОР
КК"
              onChange={onChangeKk}
            >
              ПРМ
            </TractBottomButton>
            <TractBottomButton
              buttonType="hold"
              color="black"
              outerText="КОНТРОЛЬ
ЗАНЯТОСТИ"
            />
          </TractBottomButtons>
        </KP5BottomLeft>
        <KP5BottomMiddle>
          <SquareButton color="black" buttonType="hold" outerText="ОТКЛ. ЗС" onChange={onChangeOff} />
          <KP5Panel />
        </KP5BottomMiddle>
        <KP5BottomRight>
          <KP5BottomRightGrid>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              7
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              8
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              9
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              4
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              5
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              6
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              1
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              2
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              3
            </SquareButton>
            <SquareButton buttonType="hold" color="black" onChange={onChangeScreenValue}>
              0
            </SquareButton>
            <SquareButton buttonType="hold" color="red" onChange={onChangeScreenValue}>
              КОН
            </SquareButton>
            <SquareButton buttonType="hold" color="red" onChange={onChangeScreenValue}>
              С
            </SquareButton>
          </KP5BottomRightGrid>
          <div style={{ textAlign: 'right', marginRight: 10 }}>ИНФОРМ.</div>
        </KP5BottomRight>
      </KP5BottomPart>
      <BottomScrewBlock>
        <BottomScrew />
        <BottomScrew />
      </BottomScrewBlock>
    </PanelLayout>
  );
};

export default KP5;

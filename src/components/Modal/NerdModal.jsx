import React from "react";
import { IoClose, IoTelescope } from 'react-icons/io5';

import Margin from '../Margin/Margin';
import { 
  Wrapper, 
  ModalContainer, 
  ButtonContainer,
  CancleButton,
  ContentContainer,
  TitleText,
  ContentText,
} from "./NerdModal.styles";

const NerdModal = ({ y, setIsNerdOpened }) => {
  const height = y;

  const handleClick = () => {
    setIsNerdOpened(false);
    document.body.style.removeProperty('overflow');
  };

  return(
    <Wrapper>
      <ModalContainer height={height}>
        <ButtonContainer>
          <CancleButton type='button' onClick={() => handleClick()}>
            <IoClose className='icon'/>
          </CancleButton>
        </ButtonContainer>
        <Margin size='1rem'/>
        <ContentContainer>
          <TitleText>
            사람 별명이 너드인 이유 (?)
          </TitleText>
          <Margin size='1rem'/>
          <ContentText>
            바야흐로 대학교 힙합 동아리에 처음 들어 갔던 날, <br/>
            다른 멋진 친구들의 모습에 눌려, 저는 저의 찌질한 <br/>
            모습을 싫어 하게 되었습니다. 그렇게 다른 친구들처럼 <br/>
            멋져 보이고 싶어 계속 가면을 쓰기 시작한 저는, 문득 <br/>
            제 자신의 그런 모습도 결국 저만의 모습이라는 사실을 <br/>
            깨닫게 되었습니다. 이후, 저는 제 모든 면을 스스로<br/>
            좋아해주고자 닉네임을 이전에는 좋아하지 못한 저의 <br/>
            찌질한 면으로 정하게 되었습니다. 결코 시류에 맞춰 <br/>
            스스로를 너드남이라 자칭한 것은 아닙니다. <br/>
             <br/>
            저는 너드남이 아닌 김너드입니다. <br/>
          </ContentText>
        </ContentContainer>
      </ModalContainer>
    </Wrapper>
  );
};

export default NerdModal;
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
            때는 바야흐로 대학교 힙합 동아리에 처음 들어 갔던 날, <br/>
            때는 바야흐로 대학교 힙합 동아리에 들어 갔던 날, <br/>
            때는 바야흐로 대학교 힙합 동아리에 들어 갔던 날, <br/>
            때는 바야흐로 대학교 힙합 동아리에 들어 갔던 날, <br/>
          </ContentText>
        </ContentContainer>
      </ModalContainer>
    </Wrapper>
  );
};

export default NerdModal;
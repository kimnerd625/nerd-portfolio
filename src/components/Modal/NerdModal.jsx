import React from "react";
import { IoClose, IoTelescope } from 'react-icons/io5';

import { 
  Wrapper, 
  ModalContainer, 
  ButtonContainer,
  CancleButton,
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
      </ModalContainer>
    </Wrapper>
  );
};

export default NerdModal;
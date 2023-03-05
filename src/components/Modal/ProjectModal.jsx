import React from 'react';
import { IoClose, IoTelescope } from 'react-icons/io5';

import ImageCarousel from '../Carousel/ImageCarousel';
import { Wrapper, ModalContainer, ButtonContainer, CancleButton, GitHubButton, ButtonText, } from './ProjectModal.styles';

const ProjectModal = ({y, setIsProjectOpened, projectName}) => {
  const height = y;

  const handleClick = () => {
    setIsProjectOpened(false);
    document.body.style.removeProperty('overflow');
  }

  return(
    <Wrapper>
      <ModalContainer height={height}>
        <ButtonContainer>
          <CancleButton type='button' onClick={() => handleClick()}>
            <IoClose className='icon'/>
          </CancleButton>
          <GitHubButton type='button'>
            <ButtonText>GitHub</ButtonText>
            <IoTelescope className='icon'/>
          </GitHubButton>
        </ButtonContainer>
        <ImageCarousel projectName={projectName}/>
      </ModalContainer>
    </Wrapper>
  );
};

export default ProjectModal;
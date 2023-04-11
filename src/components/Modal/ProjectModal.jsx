import React from 'react';
import { IoClose, IoTelescope } from 'react-icons/io5';

import ImageCarousel from '../Carousel/ImageCarousel';
import { Wrapper, ModalContainer, ButtonContainer, CancelButton, GitHubButton, ButtonText, } from './ProjectModal.styles';

const ProjectModal = ({y, setIsProjectOpened, projectName, projectUrl}) => {
  const height = y;

  const handleClick = () => {
    setIsProjectOpened(false);
    document.body.style.removeProperty('overflow');
  };

  return(
    <Wrapper>
      <ModalContainer height={height}>
        <ButtonContainer>
          <CancelButton type='button' onClick={() => handleClick()}>
            <IoClose className='icon'/>
          </CancelButton>
          <a href={projectUrl}>
            <GitHubButton type='button'>
              <ButtonText>GitHub</ButtonText>
              <IoTelescope className='icon'/>
            </GitHubButton>
          </a>
        </ButtonContainer>
        <ImageCarousel projectName={projectName}/>
      </ModalContainer>
    </Wrapper>
  );
};

export default ProjectModal;
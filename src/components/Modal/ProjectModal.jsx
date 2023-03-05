import React from "react";

import ImageCarousel from "../Carousel/ImageCarousel";
import { Wrapper, ModalContainer, ButtonContainer, CancleButton, GitHubButton, } from "./ProjectModal.styles";

const ProjectModal = ({y, setIsProjectOpened}) => {
  const height = y;

  const handleClick = () => {
    setIsProjectOpened(false);
    document.body.style.removeProperty('overflow');
  }

  return(
    <Wrapper>
      <ModalContainer height={height}>
        <ButtonContainer>
          <CancleButton type='button' onClick={() => handleClick()}/>
          <GitHubButton type='button' />
        </ButtonContainer>
        <ImageCarousel />
      </ModalContainer>
    </Wrapper>
  );
};

export default ProjectModal;
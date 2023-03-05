import React from "react";

import ImageCarousel from "../Carousel/ImageCarousel";
import { Wrapper, ModalContainer, } from "./ProjectModal.styles";

const ProjectModal = (position) => {
  const height = position.y;

  return(
    <Wrapper>
      <ModalContainer height={height}>
        <ImageCarousel />
      </ModalContainer>
    </Wrapper>
  );
};

export default ProjectModal;
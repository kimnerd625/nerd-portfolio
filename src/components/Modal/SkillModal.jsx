import React from "react";

import { Wrapper, ModalContainer } from "./SkillModal.styles";

const SkillModal = ({y}) => {
  const height = y;

  return (
    <Wrapper>
      <ModalContainer height={height}>

      </ModalContainer>
    </Wrapper>
  );
};

export default SkillModal;
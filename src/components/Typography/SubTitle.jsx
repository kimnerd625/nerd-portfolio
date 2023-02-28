import React from "react";
import {SubTitleText, SubTitleContainer} from "./SubTitle.styles";

const SubTitle = ({ children }) => {
  return (
    <SubTitleContainer>
      <SubTitleText>{children}</SubTitleText>
    </SubTitleContainer>
  );
};

export default SubTitle;
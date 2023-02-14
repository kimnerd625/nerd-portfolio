import React from "react";
import {TitleText, TitleContainer} from "./Title.styles";

const Title = ({ children }) => {
  return (
    <TitleContainer>
      <TitleText>&lt;{children}&#47;&gt;</TitleText>
    </TitleContainer>
  );
}

export default Title;
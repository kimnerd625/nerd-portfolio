import React from "react";
import { HighlightText, HighlightTextContainer } from "./Highlight.styles";

const Highlight = ({ children }) => {
  return (
    <HighlightTextContainer>
      <HighlightText>{children}</HighlightText>
    </HighlightTextContainer>
  );
};

export default Highlight;
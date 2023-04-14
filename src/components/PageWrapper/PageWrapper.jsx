import React from "react";
import { BackgroundColor, Wrapper } from "./PageWrapper.styles";

const PageWrapper = ({children}) => {
  return (
    <BackgroundColor>
      <Wrapper>
        {children}
      </Wrapper>
    </BackgroundColor>
  );
};

export default PageWrapper;
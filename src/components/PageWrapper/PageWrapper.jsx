import React from "react";
import { Wrapper } from "./PageWrapper.styles";

const PageWrapper = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
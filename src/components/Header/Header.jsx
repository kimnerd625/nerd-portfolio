import React from "react";

import Title from "../Typography/Title";

import { HeaderContainer, HeaderSection, } from './Header.styles';

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <Title>
            KIMNERD
          </Title>
        </HeaderContainer>
      </HeaderSection>
    </>
  );
};

export default Header;
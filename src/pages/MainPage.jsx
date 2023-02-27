import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Margin from "../components/Margin/Margin";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";

const MainPage = () => {
  console.log('하이')
  return (
    <PageWrapper>
      <Margin size='3rem'/>
      <Header />
      <Margin size='1rem'/>
      <Introduction />
    </PageWrapper>
  );
};

export default MainPage;
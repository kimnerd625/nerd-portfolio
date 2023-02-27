import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Margin from "../components/Margin/Margin";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import MyProject from "../components/MyProject/MyProject";

const MainPage = () => {
  console.log('하이')
  return (
    <PageWrapper>
      <Margin size='3rem'/>
      <Header />
      <Margin size='1rem'/>
      <Introduction />
      <Margin size='1rem'/>
      <MyProject />
    </PageWrapper>
  );
};

export default MainPage;
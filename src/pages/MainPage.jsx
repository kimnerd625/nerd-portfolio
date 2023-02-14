import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";

const MainPage = () => {
  console.log('하이')
  return (
    <PageWrapper>
      <Header />
      <Introduction />
    </PageWrapper>
  );
};

export default MainPage;
import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Margin from "../components/Margin/Margin";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import MyProject from "../components/MyProject/MyProject";
import MyTimeline from "../components/MyTimeline/MyTimeline";
import MySkill from "../components/MySkill/MySkill";

import ImageCarousel from "../components/Carousel/ImageCarousel";

const MainPage = () => {
  return (
    <PageWrapper>
      <Margin size='3rem'/>
      <Header />
      <Margin size='1rem'/>
      <Introduction />
      <Margin size='1rem'/>
      <MyProject />
      <Margin size='1rem'/>
      <MySkill />
      <Margin size='1rem'/>
      <MyTimeline />
      <Margin size='1rem'/>
      <ImageCarousel />
    </PageWrapper>
  );
};

export default MainPage;
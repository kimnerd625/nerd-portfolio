import React, {useState, useEffect } from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Margin from "../components/Margin/Margin";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import MyProject from "../components/MyProject/MyProject";
import MyTimeline from "../components/MyTimeline/MyTimeline";
import MySkill from "../components/MySkill/MySkill";
import ProjectModal from "../components/Modal/ProjectModal";

const MainPage = () => {

  const [isProjectOpened, setIsProjectOpened] = useState(false);

  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);  

  return (
    <div>
      <PageWrapper>
        <Margin size='3rem'/>
        <Header />
        <Margin size='1rem'/>
        <Introduction />
        <Margin size='1rem'/>
        <MyProject setIsProjectOpened={setIsProjectOpened}/>
        <Margin size='1rem'/>
        <MySkill />
        <Margin size='1rem'/>
        <MyTimeline />
        <Margin size='1rem'/>
      </PageWrapper>
      { isProjectOpened && (
        <ProjectModal y={position}/>
      )}
    </div>
  );
};

export default MainPage;
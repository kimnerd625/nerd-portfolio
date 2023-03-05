import React, {useState, useEffect } from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Margin from "../components/Margin/Margin";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import MyProject from "../components/MyProject/MyProject";
import MyTimeline from "../components/MyTimeline/MyTimeline";
import MySkill from "../components/MySkill/MySkill";
import NerdModal from "../components/Modal/NerdModal";
import ProjectModal from "../components/Modal/ProjectModal";
import SkillModal from "../components/Modal/SkillModal";

const MainPage = () => {
  const [isNerdOpened, setIsNerdOpened] = useState(false);
  const [isProjectOpened, setIsProjectOpened] = useState(false);
  const [isSkillOpened, setIsSkillOpened] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

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
        <Introduction setIsNerdOpened={setIsNerdOpened}/>
        <Margin size='1rem'/>
        <MyProject setIsProjectOpened={setIsProjectOpened} setProjectName={setProjectName} setProjectUrl={setProjectUrl}/>
        <Margin size='1rem'/>
        <MySkill />
        <Margin size='1rem'/>
        <MyTimeline />
        <Margin size='1rem'/>
      </PageWrapper>
      { isNerdOpened && (
        <NerdModal y={position} setIsNerdOpened={setIsNerdOpened} />
      )}
      { isSkillOpened && (
        <SkillModal y={position} setIsSkillOpened={setIsSkillOpened} />
      )}
      { isProjectOpened && (
        <ProjectModal y={position} setIsProjectOpened={setIsProjectOpened} projectName={projectName} projectUrl={projectUrl}/>
      )}
    </div>
  );
};

export default MainPage;
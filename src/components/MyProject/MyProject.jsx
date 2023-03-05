import React from "react";

import portfolioData from "../../portfolioData.json";
import SubTitle from "../Typography/SubTitle";
import MyProjectCard from "./MyProjectCard";

import { MyProjectContainer } from "./MyProject.styles";

const MyProject = ({setIsProjectOpened}) => {
  const { projects } = portfolioData;

  return (
    <MyProjectContainer>
      <SubTitle>
        My Projects
      </SubTitle>
      { projects && (
        <>
          {projects.map((project, index) => (
            <MyProjectCard key={index} {...project} setIsModalOpened={setIsProjectOpened}/>
          ))}
        </>
      )}
    </MyProjectContainer>
  );
};

export default MyProject;
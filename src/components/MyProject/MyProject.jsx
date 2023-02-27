import React from "react";

import SubTitle from "../Typography/SubTitle";
import MyProjectCard from "./MyProjectCard";
import portfolioData from "../../portfolioData.json";

import { MyProjectContainer } from "./MyProject.styles";

const MyProject = () => {
  const { projects } = portfolioData;

  return (
    <MyProjectContainer>
      <SubTitle>
        My Projects
      </SubTitle>
      { projects && (
        <>
          {projects.map((project, index) => (
            <MyProjectCard key={index} {...project}/>
          ))}
        </>
      )}
    </MyProjectContainer>
  );
};

export default MyProject;
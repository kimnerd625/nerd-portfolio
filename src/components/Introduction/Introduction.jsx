import React from "react";

import portfolioData from "../../portfolioData.json";

import SubTitle from "../Typography/SubTitle";

import { 
  IntroductionContainer, 
  PersonalInfo, 
  ProfileImage, 
  ProfileImageContainer, 
  ProfileText,
  ProfileTextContainer,
} from "./Introduction.styles";

const Introduction = () => {

  const {
    introduction: { name, email, githubUrl, blogUrl, },
  } = portfolioData;

  const imgUrl = "/profile.jpg";

  return (
    <IntroductionContainer>
      <SubTitle>About Me</SubTitle>
      <PersonalInfo>
        <ProfileImageContainer>
          <ProfileImage src={imgUrl}/>
        </ProfileImageContainer>
        <ProfileTextContainer>
          <ProfileText>
            Name: {name}
          </ProfileText>
          <ProfileText>
            Email: {email}
          </ProfileText>
          <ProfileText>
            GitHub: {githubUrl}
          </ProfileText>
          <ProfileText>
            Blog: {blogUrl}
          </ProfileText>
        </ProfileTextContainer>
      </PersonalInfo>
    </IntroductionContainer>
  );
}

export default Introduction;
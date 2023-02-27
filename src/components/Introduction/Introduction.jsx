import React from "react";

import portfolioData from "../../portfolioData.json";
import Margin from "../Margin/Margin";
import SubTitle from "../Typography/SubTitle";
import MarkdownRenderer from "../Markdown/MarkdownRenderer";

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

  const imgUrl = "/avatar.gif";

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
      <Margin size='1rem' />
      <MarkdownRenderer />
    </IntroductionContainer>
  );
}

export default Introduction;
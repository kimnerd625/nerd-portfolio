import React from "react";

import portfolioData from "../../portfolioData.json";
import Margin from "../Margin/Margin";
import SubTitle from "../Typography/SubTitle";
import Highlight from "../Typography/Highlight";
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
    introduction: { name, nickName, email, githubUrl, blogUrl, },
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
          <Highlight>
            김지훈
          </Highlight>
          <ProfileText>
            <span>Nickname</span>{nickName}
          </ProfileText>
          <ProfileText>
            <span>Email</span>{email}
          </ProfileText>
          <ProfileText>
            <span>GitHub</span>{githubUrl}
          </ProfileText>
          <ProfileText>
            <span>Blog</span>{blogUrl}
          </ProfileText>
        </ProfileTextContainer>
      </PersonalInfo>
      <Margin size='1rem' />
      <MarkdownRenderer />
    </IntroductionContainer>
  );
}

export default Introduction;
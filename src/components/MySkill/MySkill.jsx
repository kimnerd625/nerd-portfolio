import React from "react";

import axiosLogo from './../../assets/images/axios.png';
import cssLogo from './../../assets/images/css.png';
import htmlLogo from './../../assets/images/html.png';
import javascriptLogo from './../../assets/images/javascript.png';
import styledComponentsLogo from './../../assets/images/styled-components.png';

import SubTitle from '../Typography/SubTitle';

import Data from '../../portfolioData.json';

import { 
  MySkillContainer, 
  HexagonContainer, 
  HexagonCardArea,
  HexagonCard,
  HexagonImage,
} from "./MySkill.styles";

const MySkill = () => {
  const {skillSets} = Data;

  return (
    <>
    <MySkillContainer>
      <SubTitle>
        My Skills
      </SubTitle>
        {skillSets && (
          <HexagonContainer>
            {skillSets.map((set, index) => (
              <HexagonCardArea key={index}>
                {set.skills.map((skill, index) => (
                  <HexagonCard color={skill.backgroundColor}>
                    <HexagonImage src={skill.imgUrl} />
                  </HexagonCard>
                ))}
              </HexagonCardArea>
            ))}
          </HexagonContainer>
        )}
    </MySkillContainer>
    </>
  );
};

export default MySkill;
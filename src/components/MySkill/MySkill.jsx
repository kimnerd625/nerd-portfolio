import React from "react";

import axiosLogo from './../../assets/images/axios.png';
import cssLogo from './../../assets/images/css.png';
import htmlLogo from './../../assets/images/html.png';
import javascriptLogo from './../../assets/images/javascript.png';
import styledComponentsLogo from './../../assets/images/styled-components.png';

import SubTitle from "../Typography/SubTitle";

import { 
  MySkillContainer, 
  HexagonContainer, 
  HexagonCardArea,
  HexagonCard,
  HexagonImage,
} from "./MySkill.styles";

const MySkill = () => {

  return (
    <MySkillContainer>
      <SubTitle>
        My Skills
      </SubTitle>
      <HexagonContainer>
        <HexagonCardArea>
          <HexagonCard>
            <HexagonImage src={axiosLogo}/>
          </HexagonCard>
          <HexagonCard>
            <HexagonImage src={cssLogo}/>
          </HexagonCard>
          <HexagonCard>
            <HexagonImage src={htmlLogo}/>
          </HexagonCard>
          <HexagonCard>
            <HexagonImage src={javascriptLogo}/>
          </HexagonCard>
        </HexagonCardArea>
        <HexagonCardArea>
          <HexagonCard>
            하이
          </HexagonCard>
          <HexagonCard>
            하이
          </HexagonCard>
          <HexagonCard>
            하이
          </HexagonCard>
          <HexagonCard>
            하이
          </HexagonCard>
          <HexagonCard>
            하이
          </HexagonCard>
        </HexagonCardArea>
        <HexagonCardArea>
          <HexagonCard>
            하이
          </HexagonCard>
          <HexagonCard>
            하이
          </HexagonCard>
          <HexagonCard>
            하이
          </HexagonCard>
          <HexagonCard>
            하이
          </HexagonCard>
        </HexagonCardArea>
      </HexagonContainer>
    </MySkillContainer>
  );
}

export default MySkill;
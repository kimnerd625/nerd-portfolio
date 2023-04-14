import React from "react";
import Sun from "../../assets/images/sun.svg";
import Moon from "../../assets/images/moon.svg";

import { 
  ToggleBarContainer, 
  ToggleBarSection, 
  ThemeButton,
  ButtonImage, 
} from "./ToggleBar.styles";

const ToggleBar = ({theme, toggleTheme}) => {

  const themeHandler = () => {
    toggleTheme();
  }

  return (
    <>
    <ToggleBarSection>
      <ToggleBarContainer>
        <ThemeButton
          onClick={themeHandler}
        >
          <ButtonImage src={theme === "light" ? Sun : Moon}/>
        </ThemeButton>
      </ToggleBarContainer>
    </ToggleBarSection>
    </>
  );
};

export default ToggleBar;
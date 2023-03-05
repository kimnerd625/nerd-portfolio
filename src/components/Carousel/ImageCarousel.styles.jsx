import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.div`
  cursor: pointer;

  .icon {
    font-size: 2rem;
    color: ${(props) => props.theme.color.headerColor_200}
  }

  @media (max-width: 600px) {
    .icon {
      font-size: 1.4rem;
    }
  }
`;

export {
  ImageContainer,
  Image,
  ButtonContainer,
  Button,
};
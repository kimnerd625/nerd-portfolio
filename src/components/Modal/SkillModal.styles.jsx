import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 2560px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: calc(${(props) => `${props.height}px`} + 14rem);
  left: 0;
  right: 0;
  margin: auto;
  max-width: 750px;
  width: 60rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;
  transform: translateX(-10%);

  @media (max-width: 600px) {
    transform: translateX(0%);
    width: 95%;
    padding: 0.5rem;
  }
`;

export { Wrapper, ModalContainer, };
import styled from "styled-components";

const Wrapper = styled.div`
  // border: 1px solid red;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.backgroundColor};
`;

export { Wrapper };
import styled from "@emotion/styled";

import { dimensions } from "../styles/variables";

const StyledRootLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledInnerLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledChildContainer = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
`;


export { StyledRootLayoutContainer, StyledInnerLayoutContainer, StyledChildContainer };

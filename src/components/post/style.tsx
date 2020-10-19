import styled from "@emotion/styled";

import { breakpoints, colors, dimensions } from "../../styles/variables";
import { getemsize } from "../../styles/mixins";

const StyledPostContainer = styled.article`
`;

const StyledTitle = styled.h1`
  font-size: ${dimensions.headingSizes.h1}rem;
  color: ${colors.white};
  margin-bottom: 2rem;
`;

const StyledMetaContainer = styled.section`
  padding-top: 1rem;
  margin-top: 2rem;

  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    margin: 0 0 0 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.brand};
  }
`;

const CommandKeyContainer = styled.div`
  width: 80px;
  height: 100px;
`;

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    flex-wrap: nowrap;
  }
`;

export {
  StyledPostContainer,
  StyledTitle,
  StyledMetaContainer,
  StyledGridContainer,
  CommandKeyContainer
};

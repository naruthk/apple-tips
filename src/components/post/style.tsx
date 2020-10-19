import styled from "@emotion/styled";

import {
  breakpoints,
  colors,
  dimensions,
  radius 
 } from "../../styles/variables";
import { getemsize } from "../../styles/mixins";

const StyledPostContainer = styled.article`
  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${dimensions.headingSizes.h1}rem;
  color: ${colors.white};
  margin-bottom: 2rem;

  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    margin-right: 2rem;
  }
`;

const StyledGridContainer = styled.div`
  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    margin-left: 2rem;
  }
`;

const StyledPostText = styled.div`
  margin-top: 0.5rem;
`;

const StyledMetaContainer = styled.section`
  padding-top: 1rem;
  margin-top: 2rem;
  border-top: 5px solid ${colors.navy};
  font-size: ${dimensions.fontSize.small}px;
  color: ${colors.gray.light};
`;

const CommandKeyContainer = styled.div`
  width: 80px;
  height: 100px;
`;


export {
  StyledPostContainer,
  StyledTitle,
  StyledMetaContainer,
  StyledGridContainer,
  StyledPostText,
  CommandKeyContainer
};

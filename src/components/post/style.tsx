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
  color: ${colors.ui.hero};
  margin-bottom: 2rem;

  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    margin: 2rem 2rem 0 0;
  }
`;

const StyledGridContainer = styled.div`
  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    margin: 2rem 0 0 2rem;
  }
`;

const StyledPostText = styled.div`
  margin-top: 0.5rem;
`;

const StyledMetaContainer = styled.section`
  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  padding-top: 1rem;
  margin-top: 2rem;
  border-top: 5px solid ${colors.navy};
  font-size: ${dimensions.fontSize.small}px;
  color: ${colors.white};

  a,
  a:visited,
  a:hover {
    font-weight: 600;
    color: ${colors.white};
    text-decoration: none;

    :after {
      content: ">";
      margin-left: 5px;
      color: ${colors.gray.light};
    }
  }
`;

const CommandKeyContainer = styled.div`
  width: 80px;
  height: 100px;
`;

const StyledMetaItem = styled.div`
  width: 50%;

  span {
    display: block;
    margin-bottom: 0.5rem;
    color: ${colors.gray.light};
  }
`;

export {
  StyledPostContainer,
  StyledTitle,
  StyledMetaContainer,
  StyledGridContainer,
  StyledPostText,
  StyledMetaItem,
  CommandKeyContainer
};

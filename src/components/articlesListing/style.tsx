import styled from "@emotion/styled";
import { Link } from "gatsby";

import {
  breakpoints,
  colors,
  dimensions,
  radius
} from "../../styles/variables";
import { getemsize } from "../../styles/mixins";
import { RANDOM_COLORS } from "./constants";

const StyledContainer = styled.header`
  margin: 2rem 0;
`;

const StyledListing = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 100vh;

  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    width: 50%;
    padding: 0 5px;
  }

  @media (min-width: ${getemsize(breakpoints.md)}em) {
    width: 33.33%;
  }
`;

const StyledLinkContainer = styled(Link)`
  background-color: ${props => `${RANDOM_COLORS[props.posIndex]}`};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: ${radius.card}px;
  width: 100%;

  :hover,
  :visited {
    text-decoration: none;
  }
`;

const StyledLinkHeading = styled.h2`
  font-size: ${dimensions.fontSize.large}px !important;
`;

const StyledCategoryTag = styled.p`
  font-size: ${dimensions.fontSize.small}px !important;
  color: ${colors.black};
  text-align: right;
`;

const HashtagIcon = styled.span`
  margin-right: 3px;
`;

export {
  StyledContainer,
  StyledListing,
  StyledListItem,
  StyledLinkContainer,
  StyledLinkHeading,
  StyledCategoryTag,
  HashtagIcon
};

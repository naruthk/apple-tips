import styled from "@emotion/styled";
import { Link } from "gatsby";

import { breakpoints, dimensions, colors } from "../../styles/variables";
import { getemsize } from "../../styles/mixins";

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

  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    width: 50%;
    padding: 0 5px;
  }

  @media (min-width: ${getemsize(breakpoints.md)}em) {
    width: 33.33%;
  }

  a {
    background-color: ${colors.gray.calm};
  }
`;

const StyledLinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;

  :hover,
  :visited {
    text-decoration: none;
  }
`;

const StyledLinkHeading = styled.h2`
  font-size: ${dimensions.fontSize.large}px !important;
  color: ${colors.white};
`;

const StyledLinkText = styled.p`
  flex: 1 0 auto;
  margin-top: 1rem;
  color: ${colors.gray.light};
`;

const StyledCategoryTag = styled.p`
  font-size: ${dimensions.fontSize.small}px !important;
  color: ${colors.brand};
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
  StyledLinkText,
  StyledCategoryTag,
  HashtagIcon
};

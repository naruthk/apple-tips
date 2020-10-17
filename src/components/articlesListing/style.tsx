import styled from "@emotion/styled";
import { Link } from "gatsby";

import { breakpoints, dimensions, colors } from "../../styles/variables";
import { getEmSize } from "../../styles/mixins";

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

  @media (min-width: ${getEmSize(breakpoints.sm)}em) {
    width: 50%
  }

  @media (min-width: ${getEmSize(breakpoints.md)}em) {
    width: 33.33%
  }

  a {
    background-color: ${colors.yellow};
  }
  :nth-of-type(even) a {
    background-color: ${colors.green};
  }
  :nth-of-type(3n) a {
    background-color: ${colors.blue};
  }
`;

const StyledLinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  color: ${colors.black};
  border-radius: 10px;

  :hover, :visited {
    text-decoration: none;
  }
`;

const StyledLinkHeading = styled.h2`
  font-size: ${dimensions.fontSize.large}px !important;
`;

const StyledLinkText = styled.p`
  flex: 1 0 auto;
  color: ${colors.gray.calm};
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
  StyledLinkText,
  StyledCategoryTag,
  HashtagIcon
};

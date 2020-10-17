import styled from "@emotion/styled";
import { Link } from "gatsby";

import { dimensions, colors } from "../../styles/variables";

const StyledContainer = styled.header`
  margin: 2rem 0;
`;

const StyledListing = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

const StyledLinkContainer = styled(Link)`
  display: block;
  margin: 1rem;
  background-color: ${colors.yellow};
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
  color: ${colors.gray.calm};
`;


export {
  StyledContainer,
  StyledListing,
  StyledListItem,
  StyledLinkContainer,
  StyledLinkHeading,
  StyledLinkText
};

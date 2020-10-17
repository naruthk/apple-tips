import styled from "@emotion/styled";
import { Link } from "gatsby";
import Container from "../Container";

import { dimensions, colors } from "../../styles/variables";

const StyledHeader = styled.header`
  margin-top: 2rem;
  padding: 0 ${dimensions.containerPadding}rem;
`;

const HeaderInner = styled(Container)`
  color: ${colors.white};
`;

const HomepageLink = styled(Link)`
  color: ${colors.white};

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Tagline = styled.p`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: ${dimensions.lineHeight.regular};
`;

export {
  StyledHeader,
  HeaderInner,
  HomepageLink,
  Tagline
};

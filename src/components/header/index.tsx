import React, { FC } from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";

import { heights, dimensions, colors } from "../../styles/variables";
import Container from "../Container";

const StyledHeader = styled.header`
  margin-top: 1.5rem;
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
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: ${dimensions.lineHeight.regular};
`;

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <Tagline>What would you like to find out?</Tagline>
    </HeaderInner>
  </StyledHeader>
);

export default Header;

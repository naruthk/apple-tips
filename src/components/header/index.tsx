import React, { FC } from "react";

import SearchInput from "../searchInputs";
import { StyledHeader, HeaderInner, HomepageLink, Tagline } from "./style";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <Tagline>What would you like to find out?</Tagline>
      <SearchInput />
    </HeaderInner>
  </StyledHeader>
);

export default Header;

import React, { FC } from "react";

import SearchInput from "../searchInputs";
import { StyledHeader, HeaderInner, HomepageLink, Tagline } from "./style";

interface HeaderProps {
  title: string;
  showTagline: boolean;
}

const Header: FC<HeaderProps> = ({ title, showTagline }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      {showTagline && <Tagline>What would you like to find out?</Tagline>}
      <SearchInput />
    </HeaderInner>
  </StyledHeader>
);

export default Header;

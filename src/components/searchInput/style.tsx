import styled from "@emotion/styled";

import { getemsize } from "../../styles/mixins";
import { colors, breakpoints, radius } from "../../styles/variables";

const StyledSearchContainer = styled.div`
  width: 100%;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  outline: none;
  color: ${colors.gray.light};
  background-color: ${colors.gray.medium};
  border: 2px solid ${colors.gray.medium};
  border-radius: ${radius.container}px;

  :focus,
  :active,
  :hover {
    color: ${colors.white};
  }

  @media (min-width: ${getemsize(breakpoints.md)}em) {
    padding-right: 5rem;
    padding-left: 1.25rem;
  }
`;

export { StyledSearchContainer, StyledSearchInput };

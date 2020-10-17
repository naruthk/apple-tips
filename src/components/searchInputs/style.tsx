import styled from "@emotion/styled";

import { getEmSize } from "../../styles/mixins";
import { colors, breakpoints } from "../../styles/variables";

const StyledSearchContainer = styled.div`
  width: 100%;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  outline: none;
  color: ${colors.gray.light};
  background-color: ${colors.gray.dark};
  border: 2px solid ${colors.gray.dark};
  border-radius: 20px;

  :focus, :active, :hover {
    color: ${colors.white};
  }
  
  @media (min-width: ${getEmSize(breakpoints.md)}em) {
    padding-right: 5rem;
    padding-left: 1.25rem;
  }
`;

export { StyledSearchContainer, StyledSearchInput };
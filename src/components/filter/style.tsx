import styled from "@emotion/styled";

import { breakpoints, colors, radius } from "../../styles/variables";
import { getemsize } from "../../styles/mixins";

const StyledFilterFormContainer = styled.form`
  display: flex;
  align-items: center;
  height: 3.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  color: ${colors.gray.light};

  @media (min-width: ${getemsize(breakpoints.sm)}em) {
    justify-content: flex-end;
  }

  button[type=reset] {
    display: flex;
    align-items: center;
    background-color: ${colors.navy};
    border: 2px solid ${colors.gray.light};
    border-radius: ${radius.input}px;
    outline: none;
    color: ${colors.white};

    > svg {
      margin-right: 5px;
    }
  }

  input[type=checkbox] {
    height: 1rem;
    width: 1rem;
    margin-left: 1rem;
    margin-right: 5px;
  }

  > div {
    display: flex;
    align-items: center;
  }
`;

export {
  StyledFilterFormContainer
};

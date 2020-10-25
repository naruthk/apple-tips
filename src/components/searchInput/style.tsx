import styled from "@emotion/styled";
import { Link } from "gatsby";

import { getemsize } from "../../styles/mixins";
import { colors, breakpoints, radius } from "../../styles/variables";

const StyledSearchRootContainer = styled.div`
  position: relative;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${colors.gray.medium};
  border: 2px solid ${colors.gray.calm};
  border-radius: ${radius.container}px;
`;

const StyledSearchLabel = styled.label`
  margin: 0 1rem;
  color: ${colors.gray.light};
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 1rem 0;
  outline: none;
  border-radius: ${radius.container}px;
  background-color: ${colors.gray.medium};
  border: 2px solid ${colors.gray.medium};
  color: ${colors.gray.light};

  :focus,
  :active,
  :hover {
    color: ${colors.white};
  }
`;

const StyledSearchResultsListing = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  cursor: text;
  background: ${colors.black};
  color: ${colors.white};
  z-index: 10;
  border-bottom-left-radius: ${radius.container}px;
  border-bottom-right-radius: ${radius.container}px;
  border-bottom: ${props =>
    props.showBottomBorder && `10px solid ${colors.brand}`};
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.03);
  list-style-type: none;
`;

const StyledSearchResultItem = styled(Link)`
  color: ${colors.gray.light};

  h3 {
    color: ${colors.white};
    :hover {
      color: ${colors.brand};
    }
  }

  :hover,
  :visited {
    text-decoration: none;
  }
`;

export {
  StyledSearchRootContainer,
  StyledSearchContainer,
  StyledSearchLabel,
  StyledSearchInput,
  StyledSearchResultsListing,
  StyledSearchResultItem
};

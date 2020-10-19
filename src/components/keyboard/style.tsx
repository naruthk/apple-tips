import styled from "@emotion/styled";
import { colors, dimensions } from "../../styles/variables";

const entitiesFontSize = `${dimensions.fontSize.xsmall}px`;

const StyledKeyboardContainer = styled.div`
  font-size: ${dimensions.fontSize.small}px;
  color: ${colors.gray.light};

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledKeysListingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledKeypadItem = styled.button`
  display: flex;
  align-items: flex-end;
  margin: 0 1rem 1rem 0;

  height: 50px;
  background-color: ${colors.gray.medium};
  border: 1px solid ${colors.gray.medium};
  border-radius: 0.125em;
  color: #777;
  font-size: 1em;
  outline: 0;
  appearance: none;
  user-select: none;

  > span {
    padding: 0.3rem;
  }
`;

const StyledLeftEntity = styled.span`
  font-size: ${entitiesFontSize};
`;

const StyledRightEntity = styled.span`
  font-size: ${entitiesFontSize};
  top: auto;
  bottom: 0;
`;

export {
  StyledKeyboardContainer,
  StyledKeysListingContainer,
  StyledKeypadItem,
  StyledLeftEntity,
  StyledRightEntity
};

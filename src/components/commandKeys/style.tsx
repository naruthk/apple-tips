import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  p {
    margin-right: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledShortcutItem = styled.li`
`;

export {
  StyledContainer,
  StyledShortcutItem
};

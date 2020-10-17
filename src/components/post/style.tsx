import styled from "@emotion/styled";

import { colors, dimensions } from "../../styles/variables";

const StyledPostContainer = styled.article`
`;

const StyledTitle = styled.h1`
  font-size: ${dimensions.headingSizes.h1}rem;
  color: ${colors.white};
  margin-bottom: 2rem;
`;

const StyledMetaContainer = styled.section`
  border-top: 1px solid ${colors.black};
  padding-top: 1rem;
  margin-top: 2rem;
`;

const CommandKeyContainer = styled.div`
  width: 80px;
  height: 100px;
`;

export {
  StyledPostContainer,
  StyledTitle,
  StyledMetaContainer,
  CommandKeyContainer
};

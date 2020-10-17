import React, { FC } from "react";
import styled from "@emotion/styled";

import { widths } from "../styles/variables";
import { getemsize } from "../styles/mixins";

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getemsize(widths.lg)}em;
`;

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;

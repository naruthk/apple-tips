import React, { FC } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { colors } from "../styles/variables";

import Container from "../components/Container";
import MainLayout from "../layouts";

interface NotFoundPageProps {
  location: {
    pathname: string;
  };
}

const StyledNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  text-align: center;

  h1 {
    color: ${colors.ui.hero};
  }
`;

const NotFoundPage: FC<NotFoundPageProps> = ({ location }) => (
  <MainLayout location={location}>
    <Container>
      <StyledNotFoundContainer>
        <h1>Looks like we cannot find what you're looking for</h1>
        <p>
          This is embarrassing. Please visit our <Link to="/">homepage </Link> for more tips and tricks.
        </p>
      </StyledNotFoundContainer>
    </Container>
  </MainLayout>
);

export default NotFoundPage;

import React, { FC } from "react";

import Container from "../components/Container";
import MainLayout from "../layouts";

interface ContributionsPageProps {
  location: {
    pathname: string;
  };
}

const ContributionsPage: FC<ContributionsPageProps> = ({ location }) => (
  <MainLayout location={location}>
    <Container>
      <h1>Contributing</h1>
      <p>Welcome to page 2</p>
    </Container>
  </MainLayout>
);

export default ContributionsPage;

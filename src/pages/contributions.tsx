import * as React from "react";
import { Link } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

const ContributionsPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Contributing</h1>
        <p>Welcome to page 2</p>
      </Container>
    </Page>
  </IndexLayout>
);

export default ContributionsPage;

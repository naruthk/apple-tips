import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import MainLayout from '../layouts'

import { Frontmatter } from "../typings";

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string,
            collection: string
          },
          frontmatter: Frontmatter
        }
      }
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const allTipsTricks = data.allMarkdownRemark.edges;

  return (
    <MainLayout>
      <Page>
        <Container>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Container>
      </Page>
    </MainLayout>
  );
};


export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
            collection
          }
          frontmatter {
            description
            title
            osVersion
          }
        }
      }
    }
  }
`


export default IndexPage

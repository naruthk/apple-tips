import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import MainLayout from '../layouts'

import { Frontmatter } from "../typings";
import { CATEGORIES_ENUM } from "../constants";
import useFilterHooks from '../hooks/useFilterHooks'

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            fields: {
              slug: string,
              collection: string
            },
            frontmatter: Frontmatter
          }
        }
      ]
    }
  }
}

const IndexPage: FC<IndexPageProps> = ({ data }) => {
  const { availableCategories } = useFilterHooks();

  const allTipsTricksData = data.allMarkdownRemark.edges;

  const articlesListing = allTipsTricksData
    .map(edge => {
      const { slug, collection } = edge.node.fields;
      const { title, description, osVersion } = edge.node.frontmatter;
      return {
        slug,
        collection,
        title,
        description,
        osVersion
      };
    })
    .filter(item => {
      const exactLetterCasing = CATEGORIES_ENUM[item.collection.toUpperCase()];
      return availableCategories.includes(exactLetterCasing);
    });

  return (
    <MainLayout>
      <Page>
        <Container>
          <p>Search area</p>
          <ul>
            {availableCategories.map(category => <li key={category}>{category}</li>)}
          </ul>
          <ul>
            {articlesListing.map(article => <li key={article.slug}><p>{article.title}</p><p>{article.description}</p></li>)}
          </ul>
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

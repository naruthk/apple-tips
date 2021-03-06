import React, { FC } from "react";
import { graphql } from "gatsby";

import Container from "../components/Container";
import Filter from "../components/filter";
import ArticlesListing from "../components/articlesListing";
import MainLayout from "../layouts";

import { Frontmatter, Location } from "../typings";
import { CollectionCategories, PUBLISHED_CATEGORIES } from "../constants";
import useFilterHook from "../hooks/useFilterHook";

interface IndexPageProps {
  location: Location;
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            fields: {
              slug: string;
              collection: string;
            };
            frontmatter: Frontmatter;
          };
        }
      ];
    };
  };
}

const IndexPage: FC<IndexPageProps> = ({ location, data }) => {
  const { selectedCategories, setSelectedCategories } = useFilterHook([]);

  const allTipsTricksData = data.allMarkdownRemark.edges;

  // Look for articles and filters for ones that belong in the list of selected categories
  const articlesListing = allTipsTricksData
    .map(edge => {
      const { slug, collection } = edge.node.fields;
      const { title, description, date, osVersion } = edge.node.frontmatter;

      return {
        slug,
        collection,
        title,
        date,
        description,
        osVersion
      };
    })
    .filter(item => {
      if (selectedCategories.length === 0) return true; // Nothing is selected

      const exactLetterCasing = CollectionCategories[item.collection];
      return selectedCategories.includes(exactLetterCasing);
    });

  return (
    <MainLayout location={location}>
      <Container>
        <Filter
          items={PUBLISHED_CATEGORIES}
          onSelect={(e: { target: { value: string } }) => {
            const value = e.target.value;

            if (!selectedCategories.includes(value)) {
              setSelectedCategories([...selectedCategories, value]);
            } else {
              const arrayWithRemovedValue = selectedCategories.filter(
                category => category !== value
              );
              setSelectedCategories(arrayWithRemovedValue);
            }
          }}
          onReset={() => setSelectedCategories([])}
        />
        <ArticlesListing items={articlesListing} />
      </Container>
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
            title
            description
            date
            osVersion
          }
        }
      }
    }
  }
`;

export default IndexPage;

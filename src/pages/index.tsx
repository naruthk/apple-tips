import React, { FC } from "react";
import { Link, graphql } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";
import ArticlesList from "../components/ArticlesList";
import MainLayout from "../layouts";

import { Frontmatter } from "../typings";
import { COLLECTION_CATEGORIES } from "../constants";
import useFilterHook from "../hooks/useFilterHook";

interface IndexPageProps {
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

const IndexPage: FC<IndexPageProps> = ({ data }) => {
  const {
    selectedCategories,
    setSelectedCategories,
    availableCategories
  } = useFilterHook([]);

  const allTipsTricksData = data.allMarkdownRemark.edges;

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
      if (selectedCategories.length === 0) return true;

      const exactLetterCasing = COLLECTION_CATEGORIES[item.collection.toUpperCase()];
      return selectedCategories.includes(exactLetterCasing);
    });

  return (
    <MainLayout>
      <Page>
        <Container>
          <SearchInput />
          <Filter
            items={availableCategories}
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
          <ArticlesList items={articlesListing} />
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

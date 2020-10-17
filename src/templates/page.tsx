import * as React from "react";
import { graphql } from "gatsby";

import Container from "../components/Container";
import MainLayout from "../layouts";

import { MarkdownRemark, Location } from "../typings";
import Post from "../components/post";

interface PageTemplateProps {
  location: Location,
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: MarkdownRemark;
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({ location, data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <MainLayout location={location}>
      <Container>
        <Post postData={frontmatter} html={html} />
      </Container>
    </MainLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        author
        description
        keyboardCommand
        source
        osVersion
      }
    }
  }
`;

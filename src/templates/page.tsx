import * as React from "react";
import { graphql } from "gatsby";

import Container from "../components/Container";
import MainLayout from "../layouts";

import { MarkdownRemark, Location } from "../typings";

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
  const {
    title,
    date,
    author,
    keyboardCommand,
    source,
    osVersion
  } = data.markdownRemark.frontmatter;

  return (
    <MainLayout location={location}>
      <Container>
        <h1>{title}</h1>
        <p>Author: {author}</p>
        <p>Published: {date}</p>
        {keyboardCommand && <p>Command: {keyboardCommand}</p>}
        <p>Version: {osVersion}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        {source && <p>Source: {source}</p>}
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

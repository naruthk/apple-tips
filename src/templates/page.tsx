import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string,
        date: string,
        author: string,
        description: string,
        keyboardCommand: string,
        source: string,
        osVersion: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  const {
    title,
    date,
    author,
    keyboardCommand,
    source,
    osVersion
  } = data.markdownRemark.frontmatter;

  return (
    <IndexLayout>
      <Page>
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
      </Page>
    </IndexLayout>
  )
};

export default PageTemplate

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
`

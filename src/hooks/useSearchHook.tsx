import { useStaticQuery, graphql } from "gatsby";

const DEFAULT_PLACEHOLDER = "Search for tips and tricks";

const useSearchHook = () => {
  const queriedData = useStaticQuery(graphql`
    query AvailableDataForQuerying {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
            collection
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  `);

  return {
    DEFAULT_PLACEHOLDER,
    availableDataForQuerying: queriedData.allMarkdownRemark.nodes
  };
};

export default useSearchHook;

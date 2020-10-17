import { useStaticQuery, graphql } from "gatsby";

const DEFAULT_PLACEHOLDER = "Search for tips and tricks";

/**
 * A custom hook for fetching published articles and providing them as an object to be used
 */
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
    DEFAULT_PLACEHOLDER, // The value that becomes the placeholder for the search input
    availableDataForQuerying: queriedData.allMarkdownRemark.nodes
  };
};

export default useSearchHook;

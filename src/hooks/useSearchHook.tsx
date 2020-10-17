import { useStaticQuery, graphql } from "gatsby";

/**
 * A custom hook for fetching published articles and providing them as an object to be used
 */
const useSearchHook = () => {
  const queriedData = useStaticQuery(graphql`
    query AvailableDataForQuerying {
      site {
        siteMetadata {
          texts {
            searchPlaceHolderText
          }
        }
      }
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
    searchPlaceHolderText: queriedData.site.siteMetadata.texts.searchPlaceHolderText,
    availableDataForQuerying: queriedData.allMarkdownRemark.nodes
  };
};

export default useSearchHook;

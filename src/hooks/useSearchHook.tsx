import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

const DEFAULT_PLACEHOLDER = "Search for tips and tricks";

const useSearchHook = () => {
  const [inputValue, setInputValue] = useState(DEFAULT_PLACEHOLDER);

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
    inputValue,
    setInputValue,
    availableDataForQuerying: queriedData.allMarkdownRemark.nodes
  };
};

export default useSearchHook;

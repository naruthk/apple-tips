import React, { useState, useMemo, FC } from "react";
import styled from "@emotion/styled";
import Fuse from "fuse.js";

import useSearchHook from "../hooks/useSearchHook";

const StyledContainer = styled.div`
  width: 100%;
`;

interface SearchInput {
  className?: string;
}

const SearchInput: FC<SearchInput> = ({ className }) => {
  const { inputValue, setInputValue, availableDataForQuerying } = useSearchHook();

  const fuse = useMemo(
    () =>
      new Fuse(availableDataForQuerying, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: [
          "frontmatter.title",
          "frontmatter.description"
        ]
      }),
    [availableDataForQuerying]
  )

  const result = fuse.search('hold')

  console.log('result', result)

  return (
    <StyledContainer className={className}>
      <p>Search input hello</p>
    </StyledContainer>
  );
};

export default SearchInput;

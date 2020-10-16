import React, { useState, useMemo, FC } from "react";
import { Link, navigate } from "gatsby";
import styled from "@emotion/styled";
import Fuse from "fuse.js";
import { useCombobox } from "downshift"

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
  );

  const [inputItems, setInputItems] = useState(availableDataForQuerying);

  const handleSelectedItemChange = selectedItem => {
    navigate(selectedItem.fields.slug);
  }

  const handleInputValueChange = inputValue => {
    const searchResults = fuse.search(inputValue).map(node => node.item);
    setInputItems(searchResults);
  };

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: ({ selectedItem }) => handleSelectedItemChange(selectedItem),
    onInputValueChange: ({ inputValue }) => handleInputValueChange(inputValue)
  })

  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <div {...getComboboxProps()}>
        <input {...getInputProps()} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          Search
        </button>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((node, index) => {
            const { id, fields } = node;
            return (
              <Link
                key={id}
                to={fields.slug}
                {...getItemProps({ item: node, index })}
              >
                <li>{node.frontmatter.title}</li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )


  // return (
  //   <StyledContainer className={className}>
  //     <p>Search input hello</p>
  //   </StyledContainer>
  // );
};

export default SearchInput;

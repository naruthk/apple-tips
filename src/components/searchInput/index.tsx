import React, { useState, useMemo, FC } from "react";
import { navigate } from "gatsby";
import { FaSearch } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import Fuse from "fuse.js";
import { useCombobox } from "downshift";

import useSearchHook from "../../hooks/useSearchHook";
import {
  StyledSearchRootContainer,
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchLabel,
  StyledSearchResultsListing,
  StyledSearchResultItem
} from "./style";
import { Frontmatter, Fields } from "../../typings";

const SearchInput: FC = () => {
  const { searchPlaceHolderText, availableDataForQuerying } = useSearchHook();

  /**
   * Initialize a Fuse instance with "keys" properties being the information
   *     that we allow the user to search for
   */
  const fuse = useMemo(
    () =>
      new Fuse(availableDataForQuerying, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: ["frontmatter.title", "frontmatter.description"]
      }),
    [availableDataForQuerying]
  );

  const [inputItems, setInputItems] = useState(availableDataForQuerying);

  /**
   * When selected, take the user to the article using the slug field as our url param
   * @param selectedItem selected article containing the slug
   */
  const handleSelectedItemChange = (selectedItem: { fields: Fields }) => {
    navigate(selectedItem.fields.slug);
  };

  /**
   * When the value is changed, run a search
   * @param inputValue value to use for searching
   */
  const handleInputValueChange = (inputValue: string) => {
    const searchResults = fuse.search(inputValue).map(node => node.item);
    setInputItems(searchResults);
  };

  const {
    isOpen,
    reset,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: ({ selectedItem }) => {
      // @ts-ignore: Can't get downshift to understand
      // that the value is actually not undefined
      handleSelectedItemChange(selectedItem);
    },
    onInputValueChange: ({ inputValue = "" }) =>
      handleInputValueChange(inputValue)
  });

  return (
    <StyledSearchRootContainer>
      <StyledSearchContainer {...getComboboxProps()}>
        <StyledSearchLabel {...getLabelProps()}>
          <FaSearch />
        </StyledSearchLabel>
        <StyledSearchInput
          {...getInputProps()}
          autoFocus
          placeholder={searchPlaceHolderText}
        />
        {isOpen && (
          <StyledSearchLabel {...getLabelProps()}>
            <CgCloseO onClick={reset} />
          </StyledSearchLabel>
        )}
      </StyledSearchContainer>
      <StyledSearchResultsListing {...getMenuProps()} showBottomBorder={isOpen}>
        {isOpen &&
          inputItems.map(
            (
              node: { id: string; fields: Fields; frontmatter: Frontmatter },
              index: number
            ) => {
              const { id, fields, frontmatter } = node;
              return (
                <li>
                  <StyledSearchResultItem
                    key={id}
                    to={fields.slug}
                    {...getItemProps({ item: node, index })}
                  >
                    <h3>{frontmatter.title}</h3>
                    <p>{frontmatter.description}</p>
                  </StyledSearchResultItem>
                </li>
              );
            }
          )}
      </StyledSearchResultsListing>
    </StyledSearchRootContainer>
  );
};

export default SearchInput;

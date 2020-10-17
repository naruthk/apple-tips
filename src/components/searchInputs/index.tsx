import React, { useState, useMemo, FC, Fragment } from "react";
import { Link, navigate } from "gatsby";
import Fuse from "fuse.js";
import { useCombobox } from "downshift";

import useSearchHook from "../../hooks/useSearchHook";
import { StyledSearchContainer, StyledSearchInput } from "./style";
import { Frontmatter, Fields } from "../../typings";


const SearchInput: FC = () => {
  const { DEFAULT_PLACEHOLDER, availableDataForQuerying } = useSearchHook();

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
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: ({ selectedItem }) => {
      handleSelectedItemChange(selectedItem);
    },
    onInputValueChange: ({ inputValue = "" }) =>
      handleInputValueChange(inputValue)
  });

  return (
    <Fragment>
      <StyledSearchContainer {...getComboboxProps()}>
        <StyledSearchInput {...getInputProps()} placeholder={DEFAULT_PLACEHOLDER} />
      </StyledSearchContainer>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map(
            (
              node: { id: string; fields: Fields; frontmatter: Frontmatter },
              index: number
            ) => {
              const { id, fields, frontmatter } = node;
              return (
                <Link
                  key={id}
                  to={fields.slug}
                  {...getItemProps({ item: node, index })}
                >
                  <li>
                    <div>
                      <h2>{frontmatter.title}</h2>
                      <p>{frontmatter.description}</p>
                    </div>
                  </li>
                </Link>
              );
            }
          )}
      </ul>
    </Fragment>
  );
};

export default SearchInput;

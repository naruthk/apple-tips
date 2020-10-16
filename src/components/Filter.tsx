import React, { FC } from "react";
import styled from "@emotion/styled";

import useFilterHook from "../hooks/useFilterHook";
import { CATEGORIES_ENUM } from "../constants";

const StyledContainer = styled.div`
  width: 100%;
`;

const Filter: FC = () => {
  const { selectedCategories, setSelectedCategories, availableCategories } = useFilterHook();

  const handleFilterSelected = e => {
    const value = e.target.value;
    if (!selectedCategories.includes(value)) {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  const selectableFilters = availableCategories.map(category => (
    <button key={category} value={category} onClick={e => handleFilterSelected(e)}>{category}</button>
  ));

  return (
    <ul>
      <button onClick={() => setSelectedCategories([CATEGORIES_ENUM.ALL])}>All</button>
      {selectableFilters}
    </ul>
  )
};

export default Filter;

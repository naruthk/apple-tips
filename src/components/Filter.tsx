import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  width: 100%;
`;

interface FilterProps {
  items: Array<string>,
  onSelect: Function,
  onReset: Function
}

const Filter: FC<FilterProps> = ({ items, onSelect, onReset }) => {
  const selectableFilters = items.map(item => (
    <button key={item} value={item} onClick={e => onSelect(e)}>{item}</button>
  ));

  return (
    <ul>
      <button onClick={() => onReset()}>All</button>
      {selectableFilters}
    </ul>
  )
};

export default Filter;

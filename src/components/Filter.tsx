import React, { Fragment, FC } from "react";
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
    <Fragment key={item}>
      <input
        type="checkbox"
        id={item}
        name={item}
        value={item}
        onChange={e => onSelect(e)}
      />
      <label htmlFor={item}>{item}</label>
    </Fragment>
  ));

  return (
    <form onReset={(e) => onReset(e)}>
      <ul>
        <button type="reset">All</button>
        {selectableFilters}
      </ul>
    </form>
  )
};

export default Filter;

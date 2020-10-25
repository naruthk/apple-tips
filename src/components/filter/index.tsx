import React, { FC, useState } from "react";

import { CgClose } from "react-icons/cg";
import { StyledFilterFormContainer } from "./style";

interface FilterProps {
  items: Array<string>;
  onSelect: Function;
  onReset: Function;
}

const Filter: FC<FilterProps> = ({ items, onSelect, onReset }) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const selectableFilters = items.map(item => (
    <div key={item}>
      <input
        type="checkbox"
        id={item}
        name={item}
        value={item}
        checked={checkedValues.includes(item)}
        onChange={e => {
          onSelect(e);

          const value = e.target.value;
          if (!checkedValues.includes(value)) {
            checkedValues.push(value);
          } else {
            const arrayWithRemovedValue = checkedValues.filter(
              existingValue => existingValue !== value
            );
            setCheckedValues(arrayWithRemovedValue);
          }
        }}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  ));

  return (
    <StyledFilterFormContainer
      onReset={e => {
        e.preventDefault();
        onReset(e);
        setCheckedValues([]);
      }}
    >
      {checkedValues.length > 0 && <button type="reset"><CgClose /> Filters</button>}
      {selectableFilters}
    </StyledFilterFormContainer>
  );
};

export default Filter;
